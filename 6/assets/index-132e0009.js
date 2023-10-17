(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let o=new Date,s=window.navigator.userAgent,d=window.navigator.userAgentData.platform,l=window.navigator.userAgentData.brands[0].brand,g=window.navigator.userAgentData.brands.length,u=window.navigator.userAgentData.brands[0].version,p=window.navigator.userAgentData.brands[1].brand,c=window.navigator.userAgentData.brands[1].version,w=window.navigator.userAgentData.brands[2].brand,v=window.navigator.userAgentData.brands[2].version,f=window.navigator.language,h=window.navigator.languages,b=window.screen.width,$=window.screen.height,m=window.screen.availWidth,y=window.screen.availHeight,A="ip not founded!",D=`
<div>
    <h2>${o}</h2>
    <p>userAgent: ${s}</p>
    <p>brand length: ${g}</p>
    <p>1. brands-version: ${l} - ${u}</p>
    <p>2. brands-version: ${p} - ${c}</p>
    <p>3. brands-version: ${w} - ${v}</p>
    <p>platform: ${d}</p>
    <p>language: ${f}</p>
    <p>languages: ${h}</p>
    <hr/>
    <p>Width - Height:  ${b} - ${$}</p>
    <p>availWidth - availHeight:  ${m} - ${y}</p>
    <h2>${A}</h2>
</div>`;document.querySelector("#app").innerHTML=D;
