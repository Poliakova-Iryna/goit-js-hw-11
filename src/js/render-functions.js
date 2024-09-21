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
      <ul class="descr-list">
        <li class="descr-item">
          <p class="descr-paragraph">Likes</p>
          <p class="descr-paragraph">Views</p>
          <p class="descr-paragraph">Comments</p>
          <p class="descr-paragraph">Downloads</p>
        </li>
      </ul>
    </div>
   </li>`).join('');
 
   refs.gallery.insertAdjacentHTML('beforeend', markup);
   const lightbox = new SimpleLightbox('.gallery a');
   lightbox.refresh();
   
}