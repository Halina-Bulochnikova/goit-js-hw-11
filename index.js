import{a as i,S as c,i as l}from"./assets/vendor-WLD9_8QG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p="48746428-ca8ddb89bc4c4cb9194f35bec",d="https://pixabay.com/api/";async function u(o){try{return(await i.get(d,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}function f(o){const t=document.querySelector(".gallery"),n=o.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <div class="info">
                <p>Likes</p>
                <p>Views</p>
                <p>Comments</p>
                <p>Downloads</p>
                <span>${e.likes}</span>
                <span>${e.views}</span>
                <span>${e.comments}</span>
                <span>${e.downloads}</span>
            </div>
        </a>
    `).join("");t.innerHTML=n,new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#search-form"),t=document.querySelector(".loader");o.addEventListener("submit",async n=>{n.preventDefault();const s=o.elements.searchQuery.value.trim();if(!s){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}t.style.display="block";const e=await u(s);f(e),t.style.display="none"})});
//# sourceMappingURL=index.js.map
