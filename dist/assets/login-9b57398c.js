import{_ as m}from"./logo-9cfa3541.js";import{_ as w}from"./internet-computer-icon-b6019bda.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{V as h,a as d}from"./VWindowItem-a1e4b651.js";import{r as b,b as v,a as o,w as s,d as e,o as y,V as c,e as p,f as i,g as a,h as V}from"./index-758113b4.js";import{V as _,a as n}from"./VRow-00802a5d.js";const x="/assets/side-img-2-8066cc61.png",C="/assets/help-octagon-697d5f8e.svg",k={data(){return{windowStep:1,show_password:!1}}},S={id:"login"},I=e("img",{src:x,alt:"Side banner",class:"side-banner"},null,-1),L={class:"container-windows-step"},B=e("img",{src:m,alt:"Logo",class:"img-logo mb-6"},null,-1),E=e("h5",{class:"mb-1"},"Login here",-1),N=e("p",{class:"font300 color-grey"},"Please enter your login details",-1),P=e("label",{for:"email-address"},"Email address",-1),F=e("label",{for:"password"},"Password",-1),R=e("span",{style:{color:"#667085","font-weight":"700"},class:"ml-4"},[e("img",{src:C,alt:"Help Octagon",class:"help-octagon"}),a(" Forgot your password ")],-1),T=e("img",{src:w,alt:"IC icon",class:"ic-icon"},null,-1),W={class:"container-windows-step code"},$=e("img",{src:m,alt:"Logo",class:"img-logo mb-6"},null,-1),j=e("h5",{class:"mb-1"},"2-factor verification",-1),H=e("p",{class:"font300 color-grey"},"Please enter security code you received on your email",-1),O=e("label",{for:"otp",style:{"font-weight":"500",color:"#000"}},"Secure Code",-1);function U(u,t,q,z,l,A){const f=b("v-otp-input");return y(),v("div",S,[I,o(h,{modelValue:l.windowStep,"onUpdate:modelValue":t[3]||(t[3]=r=>l.windowStep=r),"show-arrows":!1},{default:s(()=>[o(d,{value:1},{default:s(()=>[e("div",L,[o(c,{class:"card ml-2 card-register"},{default:s(()=>[B,E,N,o(_,null,{default:s(()=>[o(n,{cols:"12"},{default:s(()=>[P,o(p,{id:"email-address",class:"input",variant:"outlined",elevation:"0",placeholder:"Enter email address"})]),_:1}),o(n,{cols:"12"},{default:s(()=>[F,o(p,{id:"password",class:"input",variant:"outlined",elevation:"0","append-inner-icon":l.show_password?"mdi-eye-outline":"mdi-eye-off-outline",type:l.show_password?"text":"password",placeholder:"Enter your password","onClick:appendInner":t[0]||(t[0]=r=>l.show_password=!l.show_password)},null,8,["append-inner-icon","type"])]),_:1}),R,o(n,{cols:"12"},{default:s(()=>[o(i,{class:"center btn",onClick:t[1]||(t[1]=r=>l.windowStep=2),style:{"background-color":"#fff!important",border:"1px solid rgba(0,0,0,0.25)"}},{default:s(()=>[a("Login with Internet Identity "),T]),_:1})]),_:1}),o(n,{cols:"12"},{default:s(()=>[o(i,{class:"center btn",onClick:t[2]||(t[2]=r=>{l.windowStep=2,u.$router.push("dashboard")})},{default:s(()=>[a("Log in "),o(V,{style:{"margin-bottom":"-3px","margin-left":"5px"}},{default:s(()=>[a("mdi-login")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),o(d,{value:2},{default:s(()=>[e("div",W,[o(c,{class:"card ml-2 card-register pt-10 pb-10"},{default:s(()=>[$,j,H,o(_,null,{default:s(()=>[o(n,{cols:"12",class:"jstart astart divcol"},{default:s(()=>[O,o(f,{id:"otp"})]),_:1}),o(n,{cols:"12"},{default:s(()=>[o(i,{class:"btn",style:{"background-color":"#fff!important",border:"1px solid rgba(0,0,0,0.25)!important","min-width":"1px!important"}},{default:s(()=>[a("Resend Code")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"])])}const X=g(k,[["render",U]]);export{X as default};
