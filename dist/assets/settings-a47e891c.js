import{_ as ye}from"./wallet-73ae91e3.js";import{_ as Ae,a as ze,b as he,c as Fe,d as Be,e as Te,f as Re,g as Le}from"./loading-73ef18ca.js";import{_ as Ee}from"./internet-computer-icon-b6019bda.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import{k as oe,R as Me,af as Ue,D as ae,ag as Ne,m as F,v as U,n as ue,H as ie,f as m,a as e,_ as se,ah as Oe,ai as He,aj as me,B as We,I as we,ak as qe,G as De,al as Ge,am as je,u as fe,an as Ye,ao as Xe,ap as pe,h as r,aq as Ke,ar as Je,as as Qe,T as Ze,at as $e,a7 as et,a8 as M,au as tt,A as lt,r as st,b as X,d as s,w as t,g as a,L as z,o as x,V as _,M as le,N as V,c as I,e as C,O as ot,P as ve}from"./index-758113b4.js";import{V as R,a as u}from"./VRow-00802a5d.js";import{V as at,a as it}from"./VWindowItem-a1e4b651.js";const Ce="/assets/ring-belt-90e484b7.svg",xe="/assets/password-resset-15a9ae66.svg",nt="/assets/company-logo-53775de0.svg",rt="/assets/cloud-upload-8b7854bf.svg";const ke=Symbol.for("vuetify:v-tabs"),dt=oe({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Me(Ue({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Q=ae()({name:"VTab",props:dt(),setup(n,l){let{slots:p,attrs:b}=l;const{textColorClasses:o,textColorStyles:c}=Ne(n,"sliderColor"),f=F(()=>n.direction==="horizontal"),i=U(!1),y=ue(),g=ue();function h(A){var w,N;let{value:k}=A;if(i.value=k,k){const O=(N=(w=y.value)==null?void 0:w.$el.parentElement)==null?void 0:N.querySelector(".v-tab--selected .v-tab__slider"),j=g.value;if(!O||!j)return;const H=getComputedStyle(O).color,B=O.getBoundingClientRect(),T=j.getBoundingClientRect(),W=f.value?"x":"y",q=f.value?"X":"Y",K=f.value?"right":"bottom",L=f.value?"width":"height",D=B[W],Z=T[W],E=D>Z?B[K]-T[K]:B[W]-T[W],$=Math.sign(E)>0?f.value?"right":"bottom":Math.sign(E)<0?f.value?"left":"top":"center",S=(Math.abs(E)+(Math.sign(E)<0?B[L]:T[L]))/Math.max(B[L],T[L]),Y=B[L]/T[L],J=1.5;Oe(j,{backgroundColor:[H,"currentcolor"],transform:[`translate${q}(${E}px) scale${q}(${Y})`,`translate${q}(${E/J}px) scale${q}(${(S-1)/J+1})`,"none"],transformOrigin:Array(3).fill($)},{duration:225,easing:He})}}return ie(()=>{const[A]=m.filterProps(n);return e(m,se({symbol:ke,ref:y,class:["v-tab",n.class],style:n.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1,block:n.fixed,maxWidth:n.fixed?300:void 0,rounded:0},A,b,{"onGroup:selected":h}),{default:()=>{var k;return[((k=p.default)==null?void 0:k.call(p))??n.text,!n.hideSlider&&e("div",{ref:g,class:["v-tab__slider",o.value],style:c.value},null)]}})}),{}}});function _e(n){const p=Math.abs(n);return Math.sign(n)*(p/((1/.501-2)*(1-p)+1))}function ge(n){let{selectedElement:l,containerSize:p,contentSize:b,isRtl:o,currentScrollOffset:c,isHorizontal:f}=n;const i=f?l.clientWidth:l.clientHeight,y=f?l.offsetLeft:l.offsetTop,g=o&&f?b-y-i:y,h=p+c,A=i+g,k=i*.4;return g<=c?c=Math.max(g-k,0):h<=A&&(c=Math.min(c-(h-A-k),b-p)),c}function ct(n){let{selectedElement:l,containerSize:p,contentSize:b,isRtl:o,isHorizontal:c}=n;const f=c?l.clientWidth:l.clientHeight,i=c?l.offsetLeft:l.offsetTop,y=o&&c?b-i-f/2-p/2:i+f/2-p/2;return Math.min(b-p,Math.max(0,y))}const ut=Symbol.for("vuetify:v-slide-group"),Se=oe({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ut},nextIcon:{type:me,default:"$next"},prevIcon:{type:me,default:"$prev"},showArrows:{type:[Boolean,String],validator:n=>typeof n=="boolean"||["always","desktop","mobile"].includes(n)},...We(),...we(),...qe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),be=ae()({name:"VSlideGroup",props:Se(),emits:{"update:modelValue":n=>!0},setup(n,l){let{slots:p}=l;const{isRtl:b}=De(),{mobile:o}=Ge(),c=je(n,n.symbol),f=U(!1),i=U(0),y=U(0),g=U(0),h=F(()=>n.direction==="horizontal"),{resizeRef:A,contentRect:k}=fe(),{resizeRef:w,contentRect:N}=fe(),O=F(()=>c.selected.value.length?c.items.value.findIndex(d=>d.id===c.selected.value[0]):-1),j=F(()=>c.selected.value.length?c.items.value.findIndex(d=>d.id===c.selected.value[c.selected.value.length-1]):-1);if(Ye){let d=-1;Xe(()=>[c.selected.value,k.value,N.value,h.value],()=>{cancelAnimationFrame(d),d=requestAnimationFrame(()=>{if(k.value&&N.value){const v=h.value?"width":"height";y.value=k.value[v],g.value=N.value[v],f.value=y.value+1<g.value}if(O.value>=0&&w.value){const v=w.value.children[j.value];O.value===0||!f.value?i.value=0:n.centerActive?i.value=ct({selectedElement:v,containerSize:y.value,contentSize:g.value,isRtl:b.value,isHorizontal:h.value}):f.value&&(i.value=ge({selectedElement:v,containerSize:y.value,contentSize:g.value,isRtl:b.value,currentScrollOffset:i.value,isHorizontal:h.value}))}})})}const H=U(!1);let B=0,T=0;function W(d){const v=h.value?"clientX":"clientY";T=(b.value&&h.value?-1:1)*i.value,B=d.touches[0][v],H.value=!0}function q(d){if(!f.value)return;const v=h.value?"clientX":"clientY",P=b.value&&h.value?-1:1;i.value=P*(T+B-d.touches[0][v])}function K(d){const v=g.value-y.value;i.value<0||!f.value?i.value=0:i.value>=v&&(i.value=v),H.value=!1}function L(){A.value&&(A.value[h.value?"scrollLeft":"scrollTop"]=0)}const D=U(!1);function Z(d){if(D.value=!0,!(!f.value||!w.value)){for(const v of d.composedPath())for(const P of w.value.children)if(P===v){i.value=ge({selectedElement:P,containerSize:y.value,contentSize:g.value,isRtl:b.value,currentScrollOffset:i.value,isHorizontal:h.value});return}}}function E(d){D.value=!1}function $(d){var v;!D.value&&!(d.relatedTarget&&((v=w.value)!=null&&v.contains(d.relatedTarget)))&&S()}function ne(d){w.value&&(h.value?d.key==="ArrowRight"?S(b.value?"prev":"next"):d.key==="ArrowLeft"&&S(b.value?"next":"prev"):d.key==="ArrowDown"?S("next"):d.key==="ArrowUp"&&S("prev"),d.key==="Home"?S("first"):d.key==="End"&&S("last"))}function S(d){var v,P,re,de,ce;if(w.value)if(!d)(v=Ke(w.value)[0])==null||v.focus();else if(d==="next"){const G=(P=w.value.querySelector(":focus"))==null?void 0:P.nextElementSibling;G?G.focus():S("first")}else if(d==="prev"){const G=(re=w.value.querySelector(":focus"))==null?void 0:re.previousElementSibling;G?G.focus():S("last")}else d==="first"?(de=w.value.firstElementChild)==null||de.focus():d==="last"&&((ce=w.value.lastElementChild)==null||ce.focus())}function Y(d){const v=i.value+(d==="prev"?-1:1)*y.value;i.value=Je(v,0,g.value-y.value)}const J=F(()=>{let d=i.value>g.value-y.value?-(g.value-y.value)+_e(g.value-y.value-i.value):-i.value;i.value<=0&&(d=_e(-i.value));const v=b.value&&h.value?-1:1;return{transform:`translate${h.value?"X":"Y"}(${v*d}px)`,transition:H.value?"none":"",willChange:H.value?"transform":""}}),ee=F(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),te=F(()=>{switch(n.showArrows){case"always":return!0;case"desktop":return!o.value;case!0:return f.value||Math.abs(i.value)>0;case"mobile":return o.value||f.value||Math.abs(i.value)>0;default:return!o.value&&(f.value||Math.abs(i.value)>0)}}),Ve=F(()=>Math.abs(i.value)>0),Pe=F(()=>g.value>Math.abs(i.value)+y.value);return ie(()=>e(n.tag,{class:["v-slide-group",{"v-slide-group--vertical":!h.value,"v-slide-group--has-affixes":te.value,"v-slide-group--is-overflowing":f.value},n.class],style:n.style,tabindex:D.value||c.selected.value.length?-1:0,onFocus:$},{default:()=>{var d,v,P;return[te.value&&e("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Ve.value}],onClick:()=>Y("prev")},[((d=p.prev)==null?void 0:d.call(p,ee.value))??e(pe,null,{default:()=>[e(r,{icon:b.value?n.nextIcon:n.prevIcon},null)]})]),e("div",{key:"container",ref:A,class:"v-slide-group__container",onScroll:L},[e("div",{ref:w,class:"v-slide-group__content",style:J.value,onTouchstartPassive:W,onTouchmovePassive:q,onTouchendPassive:K,onFocusin:Z,onFocusout:E,onKeydown:ne},[(v=p.default)==null?void 0:v.call(p,ee.value)])]),te.value&&e("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Pe.value}],onClick:()=>Y("next")},[((P=p.next)==null?void 0:P.call(p,ee.value))??e(pe,null,{default:()=>[e(r,{icon:b.value?n.prevIcon:n.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:Y,scrollOffset:i,focus:S}}});function mt(n){return n?n.map(l=>typeof l=="string"?{title:l,value:l}:l):[]}const ft=oe({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Se({mandatory:"force"}),...Qe(),...we()},"VTabs"),pt=ae()({name:"VTabs",props:ft(),emits:{"update:modelValue":n=>!0},setup(n,l){let{slots:p}=l;const b=Ze(n,"modelValue"),o=F(()=>mt(n.items)),{densityClasses:c}=$e(n),{backgroundColorClasses:f,backgroundColorStyles:i}=et(M(n,"bgColor"));return tt({VTab:{color:M(n,"color"),direction:M(n,"direction"),stacked:M(n,"stacked"),fixed:M(n,"fixedTabs"),sliderColor:M(n,"sliderColor"),hideSlider:M(n,"hideSlider")}}),ie(()=>{const[y]=be.filterProps(n);return e(be,se(y,{modelValue:b.value,"onUpdate:modelValue":g=>b.value=g,class:["v-tabs",`v-tabs--${n.direction}`,`v-tabs--align-tabs-${n.alignTabs}`,{"v-tabs--fixed-tabs":n.fixedTabs,"v-tabs--grow":n.grow,"v-tabs--stacked":n.stacked},c.value,f.value,n.class],style:[{"--v-tabs-height":lt(n.height)},i.value,n.style],role:"tablist",symbol:ke}),{default:()=>[p.default?p.default():o.value.map(g=>e(Q,se(g,{key:g.title}),null))]})}),{}}}),vt={data(){return{tabsWindow:1,dialogNotification:!1,show_password:!1,dialogResetPassword:!1,dialogCompany:!1,walletStatus:!1,status2fa:!1,verifyStatus:!1,show_password:!1,dialogParticipantForm:!1,dialogPending:!1,dialogParticipant:!1,dialogPhone:!1,items:["US","UK"],selectedLang:"USA",dialogConect:!1,dialogCreditCrad:!1,dialog2fa:!1}}},_t={id:"settings"},gt={class:"mb-10",style:{color:"#00555B","font-size":"16px","font-weight":"700"}},bt=s("h3",null,"Settings",-1),yt=s("span",{class:"mb-16",style:{color:"#475467"}},"Lorem ipsum dolor sit amet.",-1),ht=s("h5",{class:"mb-6"},"Company information",-1),wt=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),Ct={key:0,class:"mb-10",src:ye,alt:"Wallet"},xt=s("h5",{class:"mb-6"},"Connect your wallet",-1),kt=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),St={key:3,class:"divrow jspace acenter mt-6"},Vt={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},Pt=s("h5",{class:"mb-6"},"2FA Authentification",-1),At=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),zt={key:3,class:"divrow jspace acenter mt-6"},Ft={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},Bt=s("h5",{class:"mb-6"},"Veirfy as participant",-1),Tt=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),Rt={key:3,class:"divrow jspace acenter mt-6"},Lt={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},Et=s("img",{class:"mb-10",src:Ce,alt:"Wallet",style:{width:"21px",height:"21px"}},null,-1),It=s("h5",{class:"mb-6"},"Notification",-1),Mt=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),Ut=s("img",{class:"mb-10",src:xe,alt:"Password reset",style:{width:"21px",height:"21px"}},null,-1),Nt=s("h5",{class:"mb-6"},"Reset password",-1),Ot=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),Ht=s("h5",{class:"mb-6"},"Support",-1),Wt=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),qt=s("img",{class:"mb-10",src:Ce,alt:"Password reset",style:{width:"30px",height:"30px"}},null,-1),Dt=s("h5",null,"Notification",-1),Gt=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),jt={class:"divrow mt-6",style:{gap:"10px"}},Yt=s("img",{class:"mb-10",src:xe,alt:"Password reset",style:{width:"30px",height:"30px"}},null,-1),Xt=s("h5",null,"Reset Password",-1),Kt=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),Jt=s("label",{for:"password"},"New Password",-1),Qt=s("label",{for:"confirm-password"},"Confirm password",-1),Zt={class:"divrow mt-6",style:{gap:"10px"}},$t=s("h5",null,"Company information",-1),el=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),tl=s("div",{class:"divrow mt-4 mb-6 acenter",style:{gap:"15px"}},[s("img",{src:nt,alt:"Logo",style:{width:"45px"}}),s("span",{style:{color:"#667085"}},[s("img",{src:rt,alt:"Logo",style:{width:"15px"}}),a(" Replace Company Logo")])],-1),ll=s("label",{for:"company-name"},"Company name",-1),sl=s("label",{for:"company-id"},"Company ID",-1),ol=s("label",{for:"city"},"City",-1),al=s("label",{for:"country"},"Country",-1),il=s("label",{for:"address"},"Company address",-1),nl={class:"divrow mt-6",style:{gap:"10px"}},rl=s("img",{class:"mb-10",src:ye,alt:"Wallet",style:{width:"30px"}},null,-1),dl=s("h5",null,"Connect wallet",-1),cl=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),ul=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:Ae,alt:"Visa"}),s("img",{src:ze,alt:"Mastercard"}),s("img",{src:he,alt:"Mastercard"})],-1),ml=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Credit / Debit cards",-1),fl=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:Fe,alt:"Bitcoin"}),s("img",{src:Be,alt:"Ethereum"})],-1),pl=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with cryptocurrency",-1),vl=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:Te,alt:"Bank"})],-1),_l=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Bank transfer",-1),gl=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:Re,alt:"Tether"})],-1),bl=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with stablecoins",-1),yl=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:Ee,alt:"ICP"})],-1),hl=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with ICP",-1),wl=s("h5",null,"Credit card connect",-1),Cl=s("label",{for:"card-name"},"Card issuer name",-1),xl=s("label",{for:"card-number"},"Card number",-1),kl=s("img",{src:he,alt:"Icono"},null,-1),Sl=s("label",{for:"expiration"},"Expiration date",-1),Vl=s("label",{for:"cvc"},"Enter CVC",-1),Pl={class:"divrow mt-6",style:{gap:"10px"}},Al=s("h5",null,"Add 2-factor verification",-1),zl=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Fl=s("label",{for:"card-number"},"Add mobile phone",-1),Bl={class:"divrow mt-6",style:{gap:"10px"}},Tl=s("h5",null,"Verify your phone",-1),Rl=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Ll=s("label",{for:"otp"},"Secure code",-1),El=s("h5",null,"Verify as participant",-1),Il={class:"divrow jspace",style:{gap:"30px"}},Ml=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Ul={class:"tertiary mt-4",style:{"font-weight":"700"}},Nl=s("h6",null,"Non-participant",-1),Ol=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Hl={class:"divcol astart ml-6",style:{gap:"20px"}},Wl=s("h6",null,"Participant",-1),ql=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Dl={class:"divcol astart ml-6",style:{gap:"20px"}},Gl=s("h5",null,"Verify as participant",-1),jl=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),Yl={class:"tertiary mt-4",style:{"font-weight":"700"}},Xl=s("label",{for:"credential"},"Credential ID",-1),Kl=s("label",{for:"password"},"Password",-1),Jl=s("img",{src:Le,alt:"loading",class:"mb-6",style:{width:"30px"}},null,-1),Ql=s("h5",null,"Verification pending",-1),Zl=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1);function $l(n,l,p,b,o,c){const f=st("v-otp-input");return x(),X("div",_t,[s("span",gt,[e(r,null,{default:t(()=>[a("mdi-home")]),_:1}),a(),e(r,null,{default:t(()=>[a("mdi-chevron-right")]),_:1}),a(" Settings")]),bt,yt,e(R,null,{default:t(()=>[e(u,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(_,{class:"card",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[e(r,{class:"mb-10"},{default:t(()=>[a("mdi-information-outline")]),_:1}),ht,wt,e(m,{class:"btn mt-6",onClick:l[0]||(l[0]=i=>o.dialogCompany=!0)},{default:t(()=>[a(" Edit personal information "),e(r,null,{default:t(()=>[a("mdi-account-edit-outline")]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(_,{class:le(["card",{verifyStatus:o.walletStatus}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[o.walletStatus?V("",!0):(x(),X("img",Ct)),o.walletStatus?(x(),I(r,{key:1,class:"mb-10",style:{color:"#067647"}},{default:t(()=>[a("mdi-wallet-outline")]),_:1})):V("",!0),xt,kt,o.walletStatus?V("",!0):(x(),I(m,{key:2,class:"btn mt-6",onClick:l[1]||(l[1]=i=>o.dialogConect=!0)},{default:t(()=>[a(" Connect + ")]),_:1})),o.walletStatus?(x(),X("div",St,[s("span",Vt,[e(r,{class:"mr-2 icon-green"},{default:t(()=>[a("mdi-check")]),_:1}),a("Wallet successfuly connected")]),e(m,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[a("Payment methods")]),_:1})])):V("",!0)]),_:1},8,["class"])]),_:1}),e(u,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(_,{class:le(["card",{verifyStatus:o.status2fa}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[o.status2fa?V("",!0):(x(),I(r,{key:0,class:"mb-10",color:"#000"},{default:t(()=>[a("mdi-lock-outline")]),_:1})),o.status2fa?(x(),I(r,{key:1,class:"mb-10",color:"#067647"},{default:t(()=>[a("mdi-lock-outline")]),_:1})):V("",!0),Pt,At,o.status2fa?V("",!0):(x(),I(m,{key:2,class:"btn mt-6",onClick:l[2]||(l[2]=i=>o.dialog2fa=!0)},{default:t(()=>[a(" Setup "),e(r,null,{default:t(()=>[a("mdi-lock-outline")]),_:1})]),_:1})),o.status2fa?(x(),X("div",zt,[s("span",Ft,[e(r,{class:"mr-2 icon-green"},{default:t(()=>[a("mdi-check")]),_:1}),a("2FA successfuly added")]),e(m,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[a("Security")]),_:1})])):V("",!0)]),_:1},8,["class"])]),_:1}),e(u,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(_,{class:le(["card",{verifyStatus:o.verifyStatus}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[o.verifyStatus?V("",!0):(x(),I(r,{key:0,class:"mb-10",color:"#000"},{default:t(()=>[a("mdi-check-decagram-outline")]),_:1})),o.verifyStatus?(x(),I(r,{key:1,class:"mb-10",color:"#067647"},{default:t(()=>[a("mdi-check-decagram-outline")]),_:1})):V("",!0),Bt,Tt,o.verifyStatus?V("",!0):(x(),I(m,{key:2,class:"btn mt-6",onClick:l[3]||(l[3]=i=>o.dialogParticipant=!0)},{default:t(()=>[a(" Veirfy as participant "),e(r,null,{default:t(()=>[a("mdi-check-decagram-outline")]),_:1})]),_:1})),o.verifyStatus?(x(),X("div",Rt,[s("span",Lt,[e(r,{class:"mr-2 icon-green"},{default:t(()=>[a("mdi-check")]),_:1}),a("Veirification confirmed")]),e(m,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[a("Security")]),_:1})])):V("",!0)]),_:1},8,["class"])]),_:1}),e(u,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(_,{class:"card",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[Et,It,Mt,e(m,{class:"btn mt-6",onClick:l[4]||(l[4]=i=>o.dialogNotification=!0)},{default:t(()=>[a(" Setup "),e(r,null,{default:t(()=>[a("mdi-bell-outline")]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(_,{class:"card",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[Ut,Nt,Ot,e(m,{class:"btn mt-6",onClick:l[5]||(l[5]=i=>o.dialogResetPassword=!0)},{default:t(()=>[a(" Reset your password "),e(r,null,{default:t(()=>[a("mdi-sync")]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(_,{class:"card",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[e(r,{class:"mb-10"},{default:t(()=>[a("mdi-headphones")]),_:1}),Ht,Wt,e(m,{class:"btn mt-6"},{default:t(()=>[a(" Contac Support "),e(r,null,{default:t(()=>[a("mdi-headphones")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(z,{modelValue:o.dialogNotification,"onUpdate:modelValue":l[11]||(l[11]=i=>o.dialogNotification=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-notification"},{default:t(()=>[e(r,{class:"close",onClick:l[6]||(l[6]=i=>o.dialogNotification=!1)},{default:t(()=>[a("mdi-close")]),_:1}),qt,Dt,Gt,e(pt,{modelValue:o.tabsWindow,"onUpdate:modelValue":l[7]||(l[7]=i=>o.tabsWindow=i),"bg-color":"transparent",color:"basil",class:"mt-5"},{default:t(()=>[e(Q,{value:1,style:{border:"none!important","border-bottom":"2px solid rgba(0,0,0,0.25)!important","border-radius":"0px!important"}},{default:t(()=>[a(" Email notifications ")]),_:1}),e(Q,{value:2,style:{border:"none!important","border-bottom":"2px solid rgba(0,0,0,0.25)!important","border-radius":"0px!important"}},{default:t(()=>[a(" In-app notifications ")]),_:1}),e(Q,{value:3,style:{border:"none!important","border-bottom":"2px solid rgba(0,0,0,0.25)!important","border-radius":"0px!important"}},{default:t(()=>[a(" Push notifications ")]),_:1})]),_:1},8,["modelValue"]),e(at,{modelValue:n.windowStep,"onUpdate:modelValue":l[8]||(l[8]=i=>n.windowStep=i)},{default:t(()=>[e(it,{value:1})]),_:1},8,["modelValue"]),s("div",jt,[e(m,{class:"btn",style:{"background-color":"#fff!important"},onClick:l[9]||(l[9]=i=>o.dialogNotification=!1)},{default:t(()=>[a("Cancel "),e(r,null,{default:t(()=>[a("mdi-close")]),_:1})]),_:1}),e(m,{class:"btn",onClick:l[10]||(l[10]=i=>{o.dialogNotification=!1}),style:{border:"none!important"}},{default:t(()=>[a("Save changes "),e(r,null,{default:t(()=>[a("mdi-content-save-outline")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialogResetPassword,"onUpdate:modelValue":l[17]||(l[17]=i=>o.dialogResetPassword=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-reset"},{default:t(()=>[e(r,{class:"close",onClick:l[12]||(l[12]=i=>o.dialogResetPassword=!1)},{default:t(()=>[a("mdi-close")]),_:1}),Yt,Xt,Kt,e(R,{class:"mt-4"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[Jt,e(C,{id:"confirm-password",class:"input",variant:"outlined",elevation:"0","append-inner-icon":o.show_password?"mdi-eye-outline":"mdi-eye-off-outline",type:o.show_password?"text":"password","onClick:appendInner":l[13]||(l[13]=i=>o.show_password=!o.show_password),placeholder:"Enter your password"},null,8,["append-inner-icon","type"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[Qt,e(C,{id:"confirm-password",class:"input",variant:"outlined",elevation:"0","append-inner-icon":o.show_password?"mdi-eye-outline":"mdi-eye-off-outline",type:o.show_password?"text":"password","onClick:appendInner":l[14]||(l[14]=i=>o.show_password=!o.show_password),placeholder:"Enter your password"},null,8,["append-inner-icon","type"])]),_:1})]),_:1}),s("div",Zt,[e(m,{class:"btn",style:{"background-color":"#fff!important"},onClick:l[15]||(l[15]=i=>o.dialogResetPassword=!1)},{default:t(()=>[a("Cancel "),e(r,null,{default:t(()=>[a("mdi-close")]),_:1})]),_:1}),e(m,{class:"btn",onClick:l[16]||(l[16]=i=>{o.dialogResetPassword=!1}),style:{border:"none!important"}},{default:t(()=>[a("Reset your password "),e(r,null,{default:t(()=>[a("mdi-sync")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialogCompany,"onUpdate:modelValue":l[21]||(l[21]=i=>o.dialogCompany=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-company"},{default:t(()=>[e(r,{class:"close",onClick:l[18]||(l[18]=i=>o.dialogCompany=!1)},{default:t(()=>[a("mdi-close")]),_:1}),e(r,{class:"mb-10",style:{width:"30px"}},{default:t(()=>[a("mdi-account-multiple-outline")]),_:1}),$t,el,tl,e(R,null,{default:t(()=>[e(u,{xl:"6",lg:"6",cols:"12"},{default:t(()=>[ll,e(C,{id:"company-name",class:"input",variant:"outlined",elevation:"0",placeholder:"ABC Company"})]),_:1}),e(u,{xl:"6",lg:"6",cols:"12"},{default:t(()=>[sl,e(C,{id:"company-id",class:"input",variant:"outlined",elevation:"0",placeholder:"0000000000"})]),_:1}),e(u,{xl:"6",lg:"6",cols:"12"},{default:t(()=>[ol,e(C,{id:"city",class:"input",variant:"outlined",elevation:"0",placeholder:"New York"})]),_:1}),e(u,{xl:"6",lg:"6",cols:"12"},{default:t(()=>[al,e(C,{id:"country",class:"input",variant:"outlined",elevation:"0",placeholder:"USA"})]),_:1}),e(u,{cols:"12"},{default:t(()=>[il,e(C,{id:"address",class:"input",variant:"outlined",elevation:"0",placeholder:"office@abccompany.com"})]),_:1})]),_:1}),s("div",nl,[e(m,{class:"btn",style:{"background-color":"#fff!important"},onClick:l[19]||(l[19]=i=>o.dialogCompany=!1)},{default:t(()=>[a("Cancel "),e(r,null,{default:t(()=>[a("mdi-close")]),_:1})]),_:1}),e(m,{class:"btn",onClick:l[20]||(l[20]=i=>{o.dialogCompany=!1}),style:{border:"none!important"}},{default:t(()=>[a("Save changes "),e(r,null,{default:t(()=>[a("mdi-content-save-outline")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialogConect,"onUpdate:modelValue":l[24]||(l[24]=i=>o.dialogConect=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-connect"},{default:t(()=>[e(r,{class:"close",onClick:l[22]||(l[22]=i=>o.dialogConect=!1)},{default:t(()=>[a("mdi-close")]),_:1}),rl,dl,cl,e(R,{class:"mt-6"},{default:t(()=>[e(u,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(_,{class:"card divcol astart jcenter"},{default:t(()=>[ul,ml,e(m,{class:"btn",onClick:l[23]||(l[23]=i=>{o.dialogConect=!1,o.dialogCreditCrad=!0})},{default:t(()=>[a("Connect")]),_:1})]),_:1})]),_:1}),e(u,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(_,{class:"card divcol astart jcenter"},{default:t(()=>[fl,pl,e(m,{class:"btn"},{default:t(()=>[a("Connect")]),_:1})]),_:1})]),_:1}),e(u,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(_,{class:"card divcol astart jcenter"},{default:t(()=>[vl,_l,e(m,{class:"btn"},{default:t(()=>[a("Connect")]),_:1})]),_:1})]),_:1}),e(u,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(_,{class:"card divcol astart jcenter"},{default:t(()=>[gl,bl,e(m,{class:"btn"},{default:t(()=>[a("Connect")]),_:1})]),_:1})]),_:1}),e(u,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(_,{class:"card divcol astart jcenter"},{default:t(()=>[yl,hl,e(m,{class:"btn"},{default:t(()=>[a("Connect")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialogCreditCrad,"onUpdate:modelValue":l[28]||(l[28]=i=>o.dialogCreditCrad=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-credit-card"},{default:t(()=>[e(r,{class:"close",onClick:l[25]||(l[25]=i=>o.dialogCreditCrad=!1)},{default:t(()=>[a("mdi-close")]),_:1}),e(r,{class:"mb-6"},{default:t(()=>[a("mdi-credit-card-outline")]),_:1}),wl,e(R,{class:"mt-6"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[Cl,e(C,{id:"card-name",class:"input",variant:"outlined",elevation:"0",placeholder:"Olivia Cero"})]),_:1}),e(u,{cols:"12"},{default:t(()=>[xl,e(C,{id:"card-number",class:"input",variant:"outlined",elevation:"0",placeholder:"Card number","append-inner-icon":"mdi-help-circle-outline"},{"prepend-inner":t(()=>[kl]),_:1})]),_:1}),e(u,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[Sl,e(C,{id:"expiration",class:"input",variant:"outlined",elevation:"0",placeholder:"12/24"})]),_:1}),e(u,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[Vl,e(C,{id:"cvc",class:"input",variant:"outlined",elevation:"0",placeholder:"Enter CVC","append-inner-icon":"mdi-help-circle-outline"})]),_:1})]),_:1}),s("div",Pl,[e(m,{class:"btn",style:{"background-color":"#fff!important"},onClick:l[26]||(l[26]=i=>o.dialogCreditCrad=!1)},{default:t(()=>[a("Cancel "),e(r,null,{default:t(()=>[a("mdi-close")]),_:1})]),_:1}),e(m,{class:"btn",onClick:l[27]||(l[27]=i=>{o.dialogCreditCrad=!1,o.walletStatus=!0})},{default:t(()=>[a("Confirm "),e(r,null,{default:t(()=>[a("mdi-check")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialog2fa,"onUpdate:modelValue":l[33]||(l[33]=i=>o.dialog2fa=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-2fa"},{default:t(()=>[e(r,{class:"close",onClick:l[29]||(l[29]=i=>o.dialog2fa=!1)},{default:t(()=>[a("mdi-close")]),_:1}),e(r,{class:"mb-6"},{default:t(()=>[a("mdi-shield-outline")]),_:1}),Al,zl,e(R,{class:"mt-6"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[Fl,e(C,{id:"card-number",class:"input",variant:"outlined",elevation:"0",placeholder:"+1 (555) 000-0000","append-inner-icon":"mdi-help-circle-outline"},{default:t(()=>[e(ot,{modelValue:o.selectedLang,"onUpdate:modelValue":l[30]||(l[30]=i=>o.selectedLang=i),items:o.items,variant:"solo",flat:"","menu-icon":"mdi-chevron-down",class:"select","bg-color":"transparent","hide-details":"",style:{color:"#000","z-index":"99"}},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),s("div",Bl,[e(m,{class:"btn",style:{"background-color":"#fff!important"},onClick:l[31]||(l[31]=i=>o.dialog2fa=!1)},{default:t(()=>[a("Cancel "),e(r,null,{default:t(()=>[a("mdi-close")]),_:1})]),_:1}),e(m,{class:"btn",onClick:l[32]||(l[32]=i=>{o.dialog2fa=!1,o.dialogPhone=!0})},{default:t(()=>[a("Confirm "),e(r,null,{default:t(()=>[a("mdi-check")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialogPhone,"onUpdate:modelValue":l[35]||(l[35]=i=>o.dialogPhone=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-2fa"},{default:t(()=>[e(r,{class:"close",onClick:l[34]||(l[34]=i=>{o.dialogPhone=!1,o.status2fa=!0})},{default:t(()=>[a("mdi-close")]),_:1}),e(r,{class:"mb-6"},{default:t(()=>[a("mdi-shield-outline")]),_:1}),Tl,Rl,e(R,{class:"mt-6"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[Ll,e(f,{id:"otp",length:4})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialogParticipant,"onUpdate:modelValue":l[38]||(l[38]=i=>o.dialogParticipant=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-participant"},{default:t(()=>[e(r,{class:"close",onClick:l[36]||(l[36]=i=>o.dialogParticipant=!1)},{default:t(()=>[a("mdi-close")]),_:1}),e(r,{class:"mb-6"},{default:t(()=>[a("mdi-check-decagram-outline")]),_:1}),El,s("div",Il,[Ml,e(m,{class:"btn",style:{border:"none!important"},onClick:l[37]||(l[37]=i=>{o.dialogParticipant=!1,o.dialogParticipantForm=!0})},{default:t(()=>[a("Become a participant")]),_:1})]),s("span",Ul,[e(r,null,{default:t(()=>[a("mdi-help-circle-outline")]),_:1}),a(" How to become a participant")]),e(R,{class:"mt-6"},{default:t(()=>[e(u,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[e(_,{class:"card pt-6 pb-6",style:{height:"100%!important"}},{default:t(()=>[Nl,Ol,e(ve,{thickness:2,class:"tertiary mt-4 mb-4",style:{height:"1px",width:"150%",position:"relative",left:"-80px"}}),s("div",Hl,[s("span",null,[e(r,{class:"check mr-2"},{default:t(()=>[a("mdi-check")]),_:1}),a(" Acces to basic features")]),s("span",null,[e(r,{class:"check mr-2"},{default:t(()=>[a("mdi-check")]),_:1}),a(" Basic reporting + analytics")]),s("span",null,[e(r,{class:"check mr-2"},{default:t(()=>[a("mdi-check")]),_:1}),a(" Up to 10 individual users")])])]),_:1})]),_:1}),e(u,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[e(_,{class:"card pt-6 pb-6"},{default:t(()=>[Wl,ql,e(ve,{thickness:2,class:"tertiary mt-4 mb-4",style:{height:"1px",width:"150%",position:"relative",left:"-80px"}}),s("div",Dl,[s("span",null,[e(r,{class:"check-green mr-2"},{default:t(()=>[a("mdi-check")]),_:1}),a(" Acces to basic features")]),s("span",null,[e(r,{class:"check-green mr-2"},{default:t(()=>[a("mdi-check")]),_:1}),a(" Basic reporting + analytics")]),s("span",null,[e(r,{class:"check-green mr-2"},{default:t(()=>[a("mdi-check")]),_:1}),a(" Up to 10 individual users")]),s("span",null,[e(r,{class:"check-green mr-2"},{default:t(()=>[a("mdi-check")]),_:1}),a(" 20GB individual data")]),s("span",null,[e(r,{class:"check-green mr-2"},{default:t(()=>[a("mdi-check")]),_:1}),a(" Basic chat support")])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialogParticipantForm,"onUpdate:modelValue":l[42]||(l[42]=i=>o.dialogParticipantForm=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-form"},{default:t(()=>[e(r,{class:"close",onClick:l[39]||(l[39]=i=>o.dialogParticipantForm=!1)},{default:t(()=>[a("mdi-close")]),_:1}),e(r,{class:"mb-6"},{default:t(()=>[a("mdi-check-decagram-outline")]),_:1}),Gl,jl,s("span",Yl,[e(r,null,{default:t(()=>[a("mdi-help-circle-outline")]),_:1}),a(" How to become a participant")]),e(R,{class:"mt-6"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[Xl,e(C,{id:"credential",class:"input",variant:"outlined",elevation:"0",placeholder:"Enter credential ID","append-inner-icon":"mdi-help-circle-outline"})]),_:1}),e(u,{cols:"12"},{default:t(()=>[Kl,e(C,{id:"password",class:"input",variant:"outlined",elevation:"0","append-inner-icon":o.show_password?"mdi-eye-outline":"mdi-eye-off-outline",type:o.show_password?"text":"password",placeholder:"Enter password","onClick:appendInner":l[40]||(l[40]=i=>o.show_password=!o.show_password)},null,8,["append-inner-icon","type"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(m,{class:"btn",style:{"min-width":"100%!important"},onClick:l[41]||(l[41]=i=>{o.dialogParticipantForm=!1,o.dialogPending=!0})},{default:t(()=>[a(" Verify ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:o.dialogPending,"onUpdate:modelValue":l[44]||(l[44]=i=>o.dialogPending=i),persistent:""},{default:t(()=>[e(_,{class:"card card-dialog-2fa"},{default:t(()=>[e(r,{class:"close",onClick:l[43]||(l[43]=i=>{o.dialogPending=!1,o.verifyStatus=!0})},{default:t(()=>[a("mdi-close")]),_:1}),Jl,Ql,Zl]),_:1})]),_:1},8,["modelValue"])])}const ns=Ie(vt,[["render",$l]]);export{ns as default};
