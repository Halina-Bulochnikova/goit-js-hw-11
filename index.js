import{a as c,i,S as l}from"./assets/vendor-WLD9_8QG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="48746428-ca8ddb89bc4c4cb9194f35bec",u="https://pixabay.com/api/";async function d(o){try{const t=await c.get(u,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});if(t.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.data.hits}catch(t){throw i.error({title:"Error",message:t.message||"Something went wrong. Please try again!",position:"topRight"}),console.error("Error fetching images:",t),t}}function m(o){const t=document.querySelector(".gallery"),s=o.map(e=>`
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
    `).join("");t.innerHTML=s,new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#search-form"),t=document.querySelector(".loader"),s=document.querySelector(".gallery");o.addEventListener("submit",async n=>{n.preventDefault();const e=o.elements.searchQuery.value.trim();if(!e){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}t.style.display="block",s.innerHTML="";try{const r=await d(e);m(r)}catch{t.style.display="none";return}t.style.display="none"})});
//# sourceMappingURL=index.js.map
