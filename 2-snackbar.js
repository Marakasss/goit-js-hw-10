import{s as c,e as i}from"./assets/helpers-BJQ5CtmF.js";/* empty css                          */import"./assets/vendor-BB5ie5fK.js";const n=document.querySelector(".form");u();const l=(t,e)=>new Promise((o,r)=>{setTimeout(()=>{t==="fulfilled"&&o(e),t==="rejected"&&r(e)},e)});n.addEventListener("submit",t=>{t.preventDefault();let e=new FormData(n);const o=e.get("state"),r=e.get("delay");l(o,r).then(s=>c(`✅ Fulfilled promise in ${r}ms`)).catch(s=>i(`❌ Rejected promise in ${r}ms`))});function u(){const t=document.querySelectorAll(".radio-button-input"),e=document.querySelector("fieldset");t.forEach(o=>{o.addEventListener("change",()=>{o.checked&&(e.style.color="#40c9ff",e.style.borderColor="#40c9ff")})})}function a(t){const e=document.querySelector("input"),o=document.querySelector(".input-label");t.target.name==="delay"&&t.target.value&&(e.style.borderColor="#40c9ff",o.style.color="#40c9ff")}n.addEventListener("input",a);
//# sourceMappingURL=2-snackbar.js.map
