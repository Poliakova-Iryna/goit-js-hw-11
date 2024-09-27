import{i as a,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",m="46090964-55e0ede1337bbc868df4332a0";function f(r){const s=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${s}`).then(o=>{if(!o.ok)throw new Error("Something went wrong..");return o.json()}).then(o=>(o.hits.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.hits))}const d=r=>{const s=document.querySelector(".gallery");s.innerHTML=r.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:c,downloads:l})=>`
          <li class="gallery-item">
              <a href="${i}" class="gallery-link">
                  <img src="${o}" alt="${e}" class="gallery-image" />
              </a>
              <div class="info">
                  <p class="info-item"><span>Likes</span> ${t}</p>
                  <p class="info-item"><span>Views</span> ${n}</p>
                  <p class="info-item"><span>Comments</span> ${c}</p>
                  <p class="info-item"><span>Downloads</span> ${l}</p>
              </div>
          </li>
      `).join("")},y=()=>{const r=document.querySelector(".loader");r&&(r.style.display="block")},h=()=>{const r=document.querySelector(".loader");r&&(r.style.display="none")},g=document.querySelector(".form"),L=new u(".gallery a",{caption:!0,captionDelay:250});g.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.query.value.trim();s&&(y(),f(s).then(o=>{d(o),L.refresh()}).catch(o=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{h()}))});
//# sourceMappingURL=index.js.map
