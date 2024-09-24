import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createMarkup(hits, gallery) {
    const markup = hits.map(hit => 
     `<li class="gallery-item">
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
        <span class="span-value">${hit.likes}</span>
      </div>
      <div class="field"></div>
        <span class="span-name">Views</span>
        <span class="span-value">${hit.views}</span>
      </div>
      <div class="field"></div>
        <span class="span-name">Comments</span>
        <span class="span-value">${hit.comments}</span>
      </div>
      <div class="field"></div>
        <span class="span-name">Downloads</span>
        <span class="span-value">${hit.downloads}</span>
      </div>
    </div>
   </li>`).join('');
 
   refs.gallery.insertAdjacentHTML('beforeend', markup);
   const lightbox = new SimpleLightbox('.gallery a');
   lightbox.refresh();
   
}