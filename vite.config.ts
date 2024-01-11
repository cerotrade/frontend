// Plugins
import vue from "@vitejs/plugin-vue"
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from "path"
import dfxJson from "./dfx.json"
import fs from "fs"

const isDev = process.env["DFX_NETWORK"] !== "ic"

let canisterIds
try {
  canisterIds = JSON.parse(
      fs
          .readFileSync(
              isDev ? ".dfx/local/canister_ids.json" : "./canister_ids.json",
          )
          .toString(),
  )
} catch (e) {
  console.error("\n⚠️  Before starting the dev server run: dfx deploy\n\n")
}

// List of all aliases for canisters
// This will allow us to: import { canisterName } from "canisters/canisterName"
const aliases = Object.entries(dfxJson.canisters).reduce(
    (acc, [name, _value]) => {
      // Get the network name, or `local` by default.
      const networkName = process.env["DFX_NETWORK"] || "local"
      const outputRoot = path.join(
          __dirname,
          ".dfx",
          networkName,
          "canisters",
          name,
      )

      return {
        ...acc,
        ["canisters/" + name]: path.join(outputRoot, "index" + ".js"),
      }
    },
    {},
)

// Generate canister ids, required by the generated canister code in .dfx/local/canisters/*
// This strange way of JSON.stringifying the value is required by vite
const canisterDefinitions = Object.entries(canisterIds).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [`process.env.${key.toUpperCase()}_CANISTER_ID`]: isDev
          ? JSON.stringify(val['local'])
          : JSON.stringify(val['ic']),
    }),
    {},
)

// Gets the port dfx is running on from dfx.json
const DFX_PORT = dfxJson.networks.local.bind.split(":")[1]

// See guide on how to configure Vite at:
// https://vitejs.dev/config/
export default defineConfig((userConfig) => {
  const env = loadEnv(userConfig.mode, process.cwd(), '')
  // isProduction = process.env.NODE_ENV === 'production',

  return {
    base: env.VITE_BASE_URL,
    plugins: [
      vue({ 
        template: { transformAssetUrls }
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true,
        styles: { configFile: 'frontend/assets/styles/settings.scss' }
      }),
    ],
    define: {
      // Here we can define global constants
      // This is required for now because the code generated by dfx relies on process.env being set
      ...canisterDefinitions,
      "process.env.NODE_ENV": JSON.stringify(
          isDev ? "development" : "production",
      ),
      'process.env': {
        BASE_URL: env.VITE_BASE_URL,
        SECURE_STORAGE_NAME_SPACE: env.VITE_SECURE_STORAGE_NAME_SPACE,
      },
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./frontend', import.meta.url)),
        // Here we tell Vite the "fake" modules that we want to define
        "vue": path.resolve("./node_modules/vue"),
        ...aliases,
      },
    },
    server: {
      fs: {
        allow: ["."],
      },
      proxy: {
        // This proxies all http requests made to /api to our running dfx instance
        "/api": {
          target: `http://0.0.0.0:${DFX_PORT}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
  }
})
