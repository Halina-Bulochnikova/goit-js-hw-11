import{a as i,S as c,i as l}from"./assets/vendor-WLD9_8QG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const d="48746428-ca8ddb89bc4c4cb9194f35bec",u="https://pixabay.com/api/";async function p(s){try{return(await i.get(u,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}function f(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(r=>`
        <a href="${r.largeImageURL}" class="gallery-item">
            <img src="${r.webformatURL}" alt="${r.tags}" />
            <div class="info">
                <p>Likes: ${r.likes}</p>
                <p>Views: ${r.views}</p>
                <p>Comments: ${r.comments}</p>
                <p>Downloads: ${r.downloads}</p>
            </div>
        </a>
    `).join(""),t.innerHTML=markup,new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#search-form"),t=document.querySelector(".loader");s.addEventListener("submit",async n=>{n.preventDefault();const r=s.elements.searchQuery.value.trim();if(!r){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}t.style.display="block";const e=await p(r);f(e),t.style.display="none"})});
//# sourceMappingURL=index.js.map
