import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const renderImages = hits => {
  const imagesBoxEl = document.querySelector('.gallery');
  gallery.innerHTML = hits
  .map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `
          <li class="gallery-item">
              <a href="${largeImageURL}" class="gallery-link">
                  <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
              </a>
              <div class="info">
                  <p class="info-item"><span>Likes</span> ${likes}</p>
                  <p class="info-item"><span>Views</span> ${views}</p>
                  <p class="info-item"><span>Comments</span> ${comments}</p>
                  <p class="info-item"><span>Downloads</span> ${downloads}</p>
              </div>
          </li>
      `
  )
  .join('');
};

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};