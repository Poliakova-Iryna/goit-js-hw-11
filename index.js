import{S as c,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l="https://pixabay.com/api/",u="46090964-55e0ede1337bbc868df4332a0";function p(o=""){return fetch(`${l}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Sorry. there are no images matching your  search query Please try again!");return t.json()})}function m(o,t){const i=o.map(e=>`<li class="gallery-item">
           <a class="gallery-link" href="">
            <img 
             class="gallery-image" 
             src="" 
             alt="" 
             />
           </a>
    <div class="card-description">
      <ul class="descr-list">
        <li class="descr-item">
          <p class="descr-paragraph">Likes</p>
          <p class="descr-paragraph">Views</p>
          <p class="descr-paragraph">Comments</p>
          <p class="descr-paragraph">Downloads</p>
        </li>
      </ul>
    </div>
   </li>`).join("");refs.gallery.insertAdjacentHTML("beforeend",i),new c(".gallery a").refresh()}const f={form:document.querySelector(".form"),cardContainer:document.querySelector(".card-container"),dallery:document.querySelector(".gallery")};f.form.addEventListener("submit",d);function d(o){o.preventDefault();const t=o.currentTarget,{query:i}=t.elements;if(!i.value.trim()){n.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}p(i.value.trim()).then(s=>{if(s.hits.length===0){n.warning({title:"Warning",message:error.message,position:"topRight"});return}m(s.hits),t.reset()}).catch(s=>{n.error({title:"Error",message:s.message,position:"topRight"})})}
//# sourceMappingURL=index.js.map
