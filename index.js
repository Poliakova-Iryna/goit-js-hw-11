import{i as l,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",f="46090964-55e0ede1337bbc868df4332a0";function y(s){const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${u}?${o}`).then(t=>{if(!t.ok)throw new Error("Something went wrong..");return t.json()}).then(t=>(t.hits.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.hits))}const d=s=>{const o=document.querySelector(".gallery");o.innerHTML=s.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:n,comments:c,downloads:p})=>`
          <li class="gallery-item">
              <a href="${i}" class="gallery-link">
                  <img src="${t}" alt="${e}" class="gallery-image" />
              </a>
              <div class="info">
                  <p class="info-item"><span>Likes</span> ${r}</p>
                  <p class="info-item"><span>Views</span> ${n}</p>
                  <p class="info-item"><span>Comments</span> ${c}</p>
                  <p class="info-item"><span>Downloads</span> ${p}</p>
              </div>
          </li>
      `).join("")},g=document.querySelector(".form"),h=new m(".gallery a",{caption:!0,captionDelay:250}),a=document.getElementById("loader");g.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.query.value.trim();o&&(a.style.display="block",y(o).then(t=>{d(t),h.refresh()}).catch(t=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{a.style.display="none"}))});
//# sourceMappingURL=index.js.map
