import{i as a,S as c}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",p="46090964-55e0ede1337bbc868df4332a0";function m(o){const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true,"});return fetch(`${u}?${s}`).then(t=>{if(!t.ok)throw new Error("Something went wrong..");return t.json()}).then(t=>(t.hits.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.hits))}const f=o=>{document.querySelector(".gallery"),gallery.innerHTML=o.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:r,comments:n,downloads:l})=>`
          <li class="gallery-item">
              <a href="${t}" class="gallery-link">
                  <img src="${s}" alt="${i}" class="gallery-image" />
              </a>
              <div class="info">
                  <p class="info-item"><span>Likes</span> ${e}</p>
                  <p class="info-item"><span>Views</span> ${r}</p>
                  <p class="info-item"><span>Comments</span> ${n}</p>
                  <p class="info-item"><span>Downloads</span> ${l}</p>
              </div>
          </li>
      `).join("")},d=()=>{const o=document.querySelector(".loader");o.style.display="block"},y=()=>{const o=document.querySelector(".loader");o.style.display="none"},h=document.querySelector(".form"),g=new c(".gallery a",{caption:!0,captionDelay:250});h.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.query.value.trim();s&&(d(),m(s).then(t=>{f(t),g.refresh()}).catch(t=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{y()}))});
//# sourceMappingURL=index.js.map
