import{S as c,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",u="46090964-55e0ede1337bbc868df4332a0";function p(a=""){return fetch(`${d}?key=${u}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error("Sorry. there are no images matching your  search query Please try again!");return s.json()})}function m(a,s){const n=a.map(e=>`<li class="gallery-item">
           <a class="gallery-link" href="">
            <img 
             class="gallery-image" 
             src="" 
             alt="" 
             />
           </a>
     <div class="card-description">
      <div class="field">
        <span class="span-name">Likes</span>
        <span class="span-value">${e.likes}</span>
      </div>
      <div class="field"></div>
        <span class="span-name">Views</span>
        <span class="span-value">${e.views}</span>
      </div>
      <div class="field"></div>
        <span class="span-name">Comments</span>
        <span class="span-value">${e.comments}</span>
      </div>
      <div class="field"></div>
        <span class="span-name">Downloads</span>
        <span class="span-value">${e.downloads}</span>
      </div>
    </div>
   </li>`).join("");refs.gallery.insertAdjacentHTML("beforeend",n),new c(".gallery a").refresh()}const o={form:document.querySelector(".form"),cardContainer:document.querySelector(".card-container"),dallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};o.form.addEventListener("submit",f);function f(a){a.preventDefault();const s=a.currentTarget,{query:n}=s.elements;if(!n.value.trim()){l.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}o.loader.classList.remove("hidden"),p(n.value.trim()).then(t=>{if(o.loader.classList.add("hidden"),t.hits.length===0){l.warning({title:"Warning",message:error.message,position:"topRight"});return}m(t.hits),s.reset()}).catch(t=>{o.loader.classList.add("hidden"),l.error({title:"Error",message:t.message,position:"topRight"})})}
//# sourceMappingURL=index.js.map
