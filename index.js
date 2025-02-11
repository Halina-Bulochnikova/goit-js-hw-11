import{a as i,S as c,i as l}from"./assets/vendor-WLD9_8QG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="48746428-ca8ddb89bc4c4cb9194f35bec",u="https://pixabay.com/api/";async function p(o){try{return(await i.get(u,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}function f(o){const t=document.querySelector(".gallery"),n=o.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <div class="info">
                <p>Likes: ${e.likes}</p>
                <p>Views: ${e.views}</p>
                <p>Comments: ${e.comments}</p>
                <p>Downloads: ${e.downloads}</p>
            </div>
        </a>
    `).join("");t.innerHTML=n,new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#search-form"),t=document.querySelector(".loader");o.addEventListener("submit",async n=>{n.preventDefault();const s=o.elements.searchQuery.value.trim();if(!s){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}t.style.display="block";const e=await p(s);f(e),t.style.display="none"})});
//# sourceMappingURL=index.js.map
