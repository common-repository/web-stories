(()=>{"use strict";const e=window.wp.domReady,t=window.webStoriesData||{},n=(e,n=!1)=>{const o=e.value,d=e.closest(".widget"),i=t.fields[o];for(const[e,t]of Object.entries(i)){const o=d.querySelector(`.${e}.stories-widget-field`),i=d.querySelector(`.${e}_wrapper`);if(o&&i){"checkbox"===o.getAttribute("type")?(n&&(o.checked=!1),t.hidden&&(o.checked=t.show),i.style.display=t.hidden?"none":"block"):i.style.display=t.show?"block":"none"}}},o=()=>document.getElementsByClassName("view_type stories-widget-field"),d=()=>{const e=o();if(e.length)for(let t=0;t<e.length;t++)e[t].addEventListener("change",(e=>{n(e.target,!1)}))};e((()=>{d(),(()=>{const e=o(),t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0);for(let n=0;n<e.length;n++)e[n].dispatchEvent(t)})()}));const i=(e,t)=>{if(!t[0])return;const o=t[0].querySelectorAll(".stories-widget-field.view_type");o.length&&(n(o[0],!1),d())},s=window.jQuery;s(document).on("widget-updated",i),s(document).on("widget-added",i)})();