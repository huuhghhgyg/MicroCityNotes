import{_ as l,o as n,c as s,b as o,a,f as c}from"./app-L7G4vjgb.js";const p={data(){return{added:!0,lang:void 0,deferredPrompt:null}},mounted(){this.lang=document.documentElement.lang,window.addEventListener("beforeinstallprompt",e=>{console.log("浏览器支持安装渐进式Web应用程序"),"standalone"in window.navigator&&window.navigator.standalone?this.added=!0:this.added=!1,e.preventDefault(),this.deferredPrompt=e})},methods:{async promptA2hs(){this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(e=>{e.outcome==="accepted"?(console.log("用户已接受A2HS"),this.added=!0):console.log("用户已拒绝A2HS"),this.deferredPrompt=null})}}},f={key:0},h={key:0},m={key:1};function u(e,t,_,g,d,r){return d.added?c("v-if",!0):(n(),s("div",f,[d.lang=="zh-CN"?(n(),s("p",h,[o("由于本站架设于Github上，国内访问可能不稳定🤧。强烈建议您将本站添加至主屏幕，以便网络状况不佳或离线时使用。您可以 "),a("a",{onClick:t[0]||(t[0]=i=>r.promptA2hs()),style:{"font-weight":"bold"}},"点击此处"),o(" 将本站作为Web应用程序安装。")])):(n(),s("p",m,[o("You can "),a("a",{onClick:t[1]||(t[1]=i=>r.promptA2hs()),style:{"font-weight":"bold"}},"click here"),o(" to install this site as a web application 📦")]))]))}const b=l(p,[["render",u],["__file","A2hs.vue"]]);export{b as default};
