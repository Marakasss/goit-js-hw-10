import{d as i,e as c,a as l,b as u,c as b}from"./assets/helpers-CDnmIyKE.js";/* empty css                          */import{f}from"./assets/vendor-BbbuE1sJ.js";let r=null;const n=document.querySelector(".button"),d=document.querySelector("#datetime-picker");i(n,"disable-btn");const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date(e[0].getTime()),a=new Date().getTime();if(t-a<0){c("Please choose a date in the future");return}l(n,"disable-btn"),n.removeEventListener("click",o),n.addEventListener("click",()=>{o(t),i(n,"disable-btn"),i(d,"disable-input")})}};try{f("#datetime-picker",p)}catch(e){console.error("Flatpickr initialization failed:",e),c("Something went wrong. Try again.")}function o(e){r&&clearInterval(r),r=setInterval(()=>{let t=Date.now();const a=e-t;let m=b(e-t);if(s(m),a<=0){clearInterval(r),s({days:0,hours:0,minutes:0,seconds:0}),l(d,"disable-input");return}},1e3)}function s(e){Object.keys(e).forEach(t=>{document.querySelector(`[data-${t}]`).textContent=u(e[t])})}
//# sourceMappingURL=1-timer.js.map
