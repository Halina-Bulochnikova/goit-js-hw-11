import{a as d,S as m,i as n}from"./assets/vendor-hwdYKDic.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="48746428-ca8ddb89bc4c4cb9194f35bec",p="https://pixabay.com/api/";async function g(o){try{return(await d.get(p,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}function h(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:l,comments:u,downloads:f})=>`
        <a href="${e}" class="gallery-item">
          <img src="${i}" alt="${r}" />
          <div class="info">
            <p>❤️ ${a}</p>
            <p>👁️ ${l}</p>
            <p>💬 ${u}</p>
            <p>⬇️ ${f}</p>
          </div>
        </a>`).join(""),new m(".gallery a").refresh()}const b=document.querySelector("#search-form"),L=document.querySelector(".gallery"),c=document.querySelector(".loader");b.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){n.error({title:"Error",message:"Search field cannot be empty!"});return}L.innerHTML="",c.style.display="block";try{const s=await g(t);s.length===0?n.warning({title:"No Results",message:"Sorry, no images found. Please try again!"}):h(s)}catch{n.error({title:"Error",message:"Failed to fetch images. Try again later!"})}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
