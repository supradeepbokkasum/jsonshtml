(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(c,n){if(!n.querySelector("ul")){n.innerHTML="";const o=i(c);n.appendChild(o)}}function i(c){const n=document.createElement("ul");for(const o in c){const r=document.createElement("li"),e=c[o];if(typeof e=="object"&&e!==null){const t=document.createElement("span");t.textContent=`▶ ${o}`,t.style.cursor="pointer",t.style.color="#007BFF";const s=i(e);s.style.display="none",t.addEventListener("click",()=>{const l=s.style.display==="none";s.style.display=l?"block":"none",t.textContent=`${l?"▼":"▶"} ${o}`}),r.appendChild(t),r.appendChild(s)}else r.textContent=`${o}: ${e}`;n.appendChild(r)}return n}document.addEventListener("DOMContentLoaded",()=>{const c=document.getElementById("json-input"),n=document.getElementById("validate-button"),o=document.getElementById("tree-container");n.addEventListener("click",()=>{const r=c.value;o.innerHTML="";try{const e=JSON.parse(r);d(e,o)}catch{alert("Invalid JSON")}})});
