import{K as V,r as v,b as h,a as e,w as t,L as p,d as s,o as u,h as i,g as l,V as d,M as b,N as m,c as f,f as c,e as _,O as P,P as k}from"./index-758113b4.js";import{_ as C}from"./wallet-73ae91e3.js";import{_ as S,a as A,b as w,c as B,d as F,e as L,f as U,g as z}from"./loading-73ef18ca.js";import{_ as D}from"./internet-computer-icon-b6019bda.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{V as g,a as r}from"./VRow-00802a5d.js";import{V as O}from"./VSheet-af0e8d69.js";const E="/assets/wallet-green-bbe222e5.svg",M={components:{apexchart:V},data(){return{walletStatus:!1,status2fa:!1,verifyStatus:!1,show_password:!1,dialogParticipantForm:!1,dialogPending:!1,dialogParticipant:!1,dialogPhone:!1,items:["US","UK"],selectedLang:"USA",dialogConect:!1,dialogCreditCrad:!1,dialog2fa:!1,donutSeries:[44,55,81],donutOptions:{chart:{type:"donut"},colors:["#00393D","#00555B","#C6F221"],dataLabels:{enabled:!1},stroke:{width:0},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[{name:"PRODUCT A",data:[424,355,431,167,212,543,664,155,841,637,122,443]},{name:"PRODUCT B",data:[153,623,720,338,193,217,113,233,420,558,113,927]},{name:"PRODUCT C",data:[111,187,165,115,821,814,411,173,315,115,261,314]}],chartOptions:{chart:{type:"bar",height:150,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0}},colors:["#00393D","#00555B","#EAECF0"],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10,dataLabels:{enabled:!1}}},xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},legend:{show:!1},fill:{opacity:1}}}}},I={id:"dashboard"},T=s("h4",null,"Hi Valentina 👋",-1),N=s("span",{class:"mb-16",style:{color:"#475467"}},"Welcome to Cero Trade platform.",-1),R=s("h5",{class:"mb-0",style:{"font-weight":"700"}},"Setup your profile",-1),W=s("h6",{class:"mb-0",style:{"font-weight":"700"}},"0 / 3 Steps",-1),q={key:0,class:"mb-10",src:C,alt:"Wallet"},H={key:1,class:"mb-10",src:E,alt:"Wallet Green",style:{height:"21px",width:"21px"}},J=s("h5",{class:"mb-6"},"Connect your wallet",-1),G=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),K={key:3,class:"divrow jspace acenter mt-6"},Q={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},X=s("h5",{class:"mb-6"},"2FA Authentification",-1),Y=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),Z={key:3,class:"divrow jspace acenter mt-6"},$={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},ee=s("h5",{class:"mb-6"},"Veirfy as participant",-1),te=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),se={key:3,class:"divrow jspace acenter mt-6"},le={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},oe=s("h6",null,"I-RECs Tokenized",-1),ae=s("h6",null,"My portfolio",-1),ie=s("h6",null,"Quick links",-1),ne={class:"mb-2",style:{color:"#00555B","font-size":"12px"}},re={class:"mb-2",style:{color:"#00555B","font-size":"12px"}},de={class:"mb-2",style:{color:"#00555B","font-size":"12px"}},ce=s("img",{class:"mb-10",src:C,alt:"Wallet",style:{width:"30px"}},null,-1),ue=s("h6",null,"Connect wallet",-1),me=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),pe=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:S,alt:"Visa"}),s("img",{src:A,alt:"Mastercard"}),s("img",{src:w,alt:"Mastercard"})],-1),fe=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Credit / Debit cards",-1),_e=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:B,alt:"Bitcoin"}),s("img",{src:F,alt:"Ethereum"})],-1),ge=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with cryptocurrency",-1),he=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:L,alt:"Bank"})],-1),be=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Bank transfer",-1),ye=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:U,alt:"Tether"})],-1),ve=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with stablecoins",-1),ke=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:D,alt:"ICP"})],-1),Ce=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with ICP",-1),we=s("h6",null,"Credit card connect",-1),xe=s("label",{for:"card-name"},"Card issuer name",-1),Ve=s("label",{for:"card-number"},"Card number",-1),Pe=s("img",{src:w,alt:"Icono"},null,-1),Se=s("label",{for:"expiration"},"Expiration date",-1),Ae=s("label",{for:"cvc"},"Enter CVC",-1),Be={class:"divrow mt-6",style:{gap:"10px"}},Fe=s("h6",null,"Add 2-factor verification",-1),Le=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Ue=s("label",{for:"card-number"},"Add mobile phone",-1),ze={class:"divrow mt-6",style:{gap:"10px"}},De=s("h6",null,"Verify your phone",-1),je=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Oe=s("label",{for:"otp"},"Secure code",-1),Ee=s("h6",null,"Verify as participant",-1),Me={class:"divrow jspace",style:{gap:"30px"}},Ie=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Te={class:"tertiary mt-4",style:{"font-weight":"700"}},Ne=s("h6",null,"Non-participant",-1),Re=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),We={class:"divcol astart ml-6",style:{gap:"20px"}},qe=s("h6",null,"Participant",-1),He=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Je={class:"divcol astart ml-6",style:{gap:"20px"}},Ge=s("h6",null,"Verify as participant",-1),Ke=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Qe={class:"tertiary mt-4",style:{"font-weight":"700"}},Xe=s("label",{for:"credential"},"Credential ID",-1),Ye=s("label",{for:"password"},"Password",-1),Ze=s("img",{src:z,alt:"loading",class:"mb-6",style:{width:"30px"}},null,-1),$e=s("h6",null,"Verification pending",-1),et=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1);function tt(st,a,lt,ot,o,at){const y=v("apexchart"),x=v("v-otp-input");return u(),h("div",I,[T,N,e(g,null,{default:t(()=>[e(r,{cols:"6",class:"jstart acenter divrow",style:{gap:"20px"}},{default:t(()=>[e(O,{class:"center sheet"},{default:t(()=>[e(i,null,{default:t(()=>[l("mdi-image-filter-center-focus-weak")]),_:1})]),_:1}),R]),_:1}),e(r,{cols:"6",class:"jend acenter"},{default:t(()=>[W]),_:1}),e(r,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(d,{class:b(["card",{verifyStatus:o.walletStatus}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[o.walletStatus?m("",!0):(u(),h("img",q)),o.walletStatus?(u(),h("img",H)):m("",!0),J,G,o.walletStatus?m("",!0):(u(),f(c,{key:2,class:"btn mt-6",onClick:a[0]||(a[0]=n=>o.dialogConect=!0)},{default:t(()=>[l(" Connect + ")]),_:1})),o.walletStatus?(u(),h("div",K,[s("span",Q,[e(i,{class:"mr-2 icon-green"},{default:t(()=>[l("mdi-check")]),_:1}),l("Wallet successfuly connected")]),e(c,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[l("Payment methods")]),_:1})])):m("",!0)]),_:1},8,["class"])]),_:1}),e(r,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(d,{class:b(["card",{verifyStatus:o.status2fa}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[o.status2fa?m("",!0):(u(),f(i,{key:0,class:"mb-10",color:"#000"},{default:t(()=>[l("mdi-lock-outline")]),_:1})),o.status2fa?(u(),f(i,{key:1,class:"mb-10",color:"#067647"},{default:t(()=>[l("mdi-lock-outline")]),_:1})):m("",!0),X,Y,o.status2fa?m("",!0):(u(),f(c,{key:2,class:"btn mt-6",onClick:a[1]||(a[1]=n=>o.dialog2fa=!0)},{default:t(()=>[l(" Setup "),e(i,null,{default:t(()=>[l("mdi-lock-outline")]),_:1})]),_:1})),o.status2fa?(u(),h("div",Z,[s("span",$,[e(i,{class:"mr-2 icon-green"},{default:t(()=>[l("mdi-check")]),_:1}),l("2FA successfuly added")]),e(c,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[l("Security")]),_:1})])):m("",!0)]),_:1},8,["class"])]),_:1}),e(r,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(d,{class:b(["card",{verifyStatus:o.verifyStatus}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[o.verifyStatus?m("",!0):(u(),f(i,{key:0,class:"mb-10",color:"#000"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1})),o.verifyStatus?(u(),f(i,{key:1,class:"mb-10",color:"#067647"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1})):m("",!0),ee,te,o.verifyStatus?m("",!0):(u(),f(c,{key:2,class:"btn mt-6",onClick:a[2]||(a[2]=n=>o.dialogParticipant=!0)},{default:t(()=>[l(" Veirfy as participant "),e(i,null,{default:t(()=>[l("mdi-check-decagram-outline")]),_:1})]),_:1})),o.verifyStatus?(u(),h("div",se,[s("span",le,[e(i,{class:"mr-2 icon-green"},{default:t(()=>[l("mdi-check")]),_:1}),l("Veirification confirmed")]),e(c,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[l("Security")]),_:1})])):m("",!0)]),_:1},8,["class"])]),_:1}),e(r,{xl:"9",lg:"9",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card"},{default:t(()=>[oe,e(y,{type:"bar",height:"350",options:o.chartOptions,series:o.series},null,8,["options","series"])]),_:1})]),_:1}),e(r,{xl:"3",lg:"3",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card mb-6"},{default:t(()=>[ae,e(y,{type:"donut",options:o.donutOptions,series:o.donutSeries},null,8,["options","series"])]),_:1}),e(d,{class:"card divcol",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[ie,s("span",ne,[e(i,{color:"#00555B"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1}),l(" Participant verification")]),s("span",re,[e(i,{color:"#00555B"},{default:t(()=>[l("mdi-file-document-check-outline")]),_:1}),l(" Documentation")]),s("span",de,[e(i,{color:"#00555B"},{default:t(()=>[l("mdi-headphones")]),_:1}),l(" Support")])]),_:1})]),_:1})]),_:1}),e(p,{modelValue:o.dialogConect,"onUpdate:modelValue":a[5]||(a[5]=n=>o.dialogConect=n),persistent:""},{default:t(()=>[e(d,{class:"card card-dialog-connect"},{default:t(()=>[e(i,{class:"close",onClick:a[3]||(a[3]=n=>o.dialogConect=!1)},{default:t(()=>[l("mdi-close")]),_:1}),ce,ue,me,e(g,{class:"mt-6"},{default:t(()=>[e(r,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card divcol astart jcenter"},{default:t(()=>[pe,fe,e(c,{class:"btn",onClick:a[4]||(a[4]=n=>{o.dialogConect=!1,o.dialogCreditCrad=!0})},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1}),e(r,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card divcol astart jcenter"},{default:t(()=>[_e,ge,e(c,{class:"btn"},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1}),e(r,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card divcol astart jcenter"},{default:t(()=>[he,be,e(c,{class:"btn"},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1}),e(r,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card divcol astart jcenter"},{default:t(()=>[ye,ve,e(c,{class:"btn"},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1}),e(r,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card divcol astart jcenter"},{default:t(()=>[ke,Ce,e(c,{class:"btn"},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:o.dialogCreditCrad,"onUpdate:modelValue":a[9]||(a[9]=n=>o.dialogCreditCrad=n),persistent:""},{default:t(()=>[e(d,{class:"card card-dialog-credit-card"},{default:t(()=>[e(i,{class:"close",onClick:a[6]||(a[6]=n=>o.dialogCreditCrad=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(i,{class:"mb-6"},{default:t(()=>[l("mdi-credit-card-outline")]),_:1}),we,e(g,{class:"mt-6"},{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[xe,e(_,{id:"card-name",class:"input",variant:"outlined",elevation:"0",placeholder:"Olivia Cero"})]),_:1}),e(r,{cols:"12"},{default:t(()=>[Ve,e(_,{id:"card-number",class:"input",variant:"outlined",elevation:"0",placeholder:"Card number","append-inner-icon":"mdi-help-circle-outline"},{"prepend-inner":t(()=>[Pe]),_:1})]),_:1}),e(r,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[Se,e(_,{id:"expiration",class:"input",variant:"outlined",elevation:"0",placeholder:"12/24"})]),_:1}),e(r,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[Ae,e(_,{id:"cvc",class:"input",variant:"outlined",elevation:"0",placeholder:"Enter CVC","append-inner-icon":"mdi-help-circle-outline"})]),_:1})]),_:1}),s("div",Be,[e(c,{class:"btn",style:{"background-color":"#fff!important"},onClick:a[7]||(a[7]=n=>o.dialogCreditCrad=!1)},{default:t(()=>[l("Cancel "),e(i,null,{default:t(()=>[l("mdi-close")]),_:1})]),_:1}),e(c,{class:"btn",onClick:a[8]||(a[8]=n=>{o.dialogCreditCrad=!1,o.walletStatus=!0})},{default:t(()=>[l("Confirm "),e(i,null,{default:t(()=>[l("mdi-check")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:o.dialog2fa,"onUpdate:modelValue":a[14]||(a[14]=n=>o.dialog2fa=n),persistent:""},{default:t(()=>[e(d,{class:"card card-dialog-2fa"},{default:t(()=>[e(i,{class:"close",onClick:a[10]||(a[10]=n=>o.dialog2fa=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(i,{class:"mb-6"},{default:t(()=>[l("mdi-shield-outline")]),_:1}),Fe,Le,e(g,{class:"mt-6"},{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[Ue,e(_,{id:"card-number",class:"input",variant:"outlined",elevation:"0",placeholder:"+1 (555) 000-0000","append-inner-icon":"mdi-help-circle-outline"},{default:t(()=>[e(P,{modelValue:o.selectedLang,"onUpdate:modelValue":a[11]||(a[11]=n=>o.selectedLang=n),items:o.items,variant:"solo",flat:"","menu-icon":"mdi-chevron-down",class:"select","bg-color":"transparent","hide-details":"",style:{color:"#000","z-index":"99"}},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),s("div",ze,[e(c,{class:"btn",style:{"background-color":"#fff!important"},onClick:a[12]||(a[12]=n=>o.dialog2fa=!1)},{default:t(()=>[l("Cancel "),e(i,null,{default:t(()=>[l("mdi-close")]),_:1})]),_:1}),e(c,{class:"btn",onClick:a[13]||(a[13]=n=>{o.dialog2fa=!1,o.dialogPhone=!0})},{default:t(()=>[l("Confirm "),e(i,null,{default:t(()=>[l("mdi-check")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:o.dialogPhone,"onUpdate:modelValue":a[16]||(a[16]=n=>o.dialogPhone=n),persistent:""},{default:t(()=>[e(d,{class:"card card-dialog-2fa"},{default:t(()=>[e(i,{class:"close",onClick:a[15]||(a[15]=n=>{o.dialogPhone=!1,o.status2fa=!0})},{default:t(()=>[l("mdi-close")]),_:1}),e(i,{class:"mb-6"},{default:t(()=>[l("mdi-shield-outline")]),_:1}),De,je,e(g,{class:"mt-6"},{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[Oe,e(x,{id:"otp",length:4})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:o.dialogParticipant,"onUpdate:modelValue":a[19]||(a[19]=n=>o.dialogParticipant=n),persistent:""},{default:t(()=>[e(d,{class:"card card-dialog-participant"},{default:t(()=>[e(i,{class:"close",onClick:a[17]||(a[17]=n=>o.dialogParticipant=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(i,{class:"mb-6"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1}),Ee,s("div",Me,[Ie,e(c,{class:"btn",style:{border:"none!important"},onClick:a[18]||(a[18]=n=>{o.dialogParticipant=!1,o.dialogParticipantForm=!0})},{default:t(()=>[l("Become a participant")]),_:1})]),s("span",Te,[e(i,null,{default:t(()=>[l("mdi-help-circle-outline")]),_:1}),l(" How to become a participant")]),e(g,{class:"mt-6"},{default:t(()=>[e(r,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card pt-6 pb-6",style:{height:"100%!important"}},{default:t(()=>[Ne,Re,e(k,{thickness:2,class:"tertiary mt-4 mb-4",style:{height:"1px",width:"150%",position:"relative",left:"-80px"}}),s("div",We,[s("span",null,[e(i,{class:"check mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Acces to basic features")]),s("span",null,[e(i,{class:"check mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Basic reporting + analytics")]),s("span",null,[e(i,{class:"check mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Up to 10 individual users")])])]),_:1})]),_:1}),e(r,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[e(d,{class:"card pt-6 pb-6"},{default:t(()=>[qe,He,e(k,{thickness:2,class:"tertiary mt-4 mb-4",style:{height:"1px",width:"150%",position:"relative",left:"-80px"}}),s("div",Je,[s("span",null,[e(i,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Acces to basic features")]),s("span",null,[e(i,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Basic reporting + analytics")]),s("span",null,[e(i,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Up to 10 individual users")]),s("span",null,[e(i,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" 20GB individual data")]),s("span",null,[e(i,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Basic chat support")])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:o.dialogParticipantForm,"onUpdate:modelValue":a[23]||(a[23]=n=>o.dialogParticipantForm=n),persistent:""},{default:t(()=>[e(d,{class:"card card-dialog-form"},{default:t(()=>[e(i,{class:"close",onClick:a[20]||(a[20]=n=>o.dialogParticipantForm=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(i,{class:"mb-6"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1}),Ge,Ke,s("span",Qe,[e(i,null,{default:t(()=>[l("mdi-help-circle-outline")]),_:1}),l(" How to become a participant")]),e(g,{class:"mt-6"},{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[Xe,e(_,{id:"credential",class:"input",variant:"outlined",elevation:"0",placeholder:"Enter credential ID","append-inner-icon":"mdi-help-circle-outline"})]),_:1}),e(r,{cols:"12"},{default:t(()=>[Ye,e(_,{id:"password",class:"input",variant:"outlined",elevation:"0","append-inner-icon":o.show_password?"mdi-eye-outline":"mdi-eye-off-outline",type:o.show_password?"text":"password",placeholder:"Enter password","onClick:appendInner":a[21]||(a[21]=n=>o.show_password=!o.show_password)},null,8,["append-inner-icon","type"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{class:"btn",style:{"min-width":"100%!important"},onClick:a[22]||(a[22]=n=>{o.dialogParticipantForm=!1,o.dialogPending=!0})},{default:t(()=>[l(" Verify ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:o.dialogPending,"onUpdate:modelValue":a[25]||(a[25]=n=>o.dialogPending=n),persistent:""},{default:t(()=>[e(d,{class:"card card-dialog-2fa"},{default:t(()=>[e(i,{class:"close",onClick:a[24]||(a[24]=n=>{o.dialogPending=!1,o.verifyStatus=!0})},{default:t(()=>[l("mdi-close")]),_:1}),Ze,$e,et]),_:1})]),_:1},8,["modelValue"])])}const pt=j(M,[["render",tt]]);export{pt as default};
