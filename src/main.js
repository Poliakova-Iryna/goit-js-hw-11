import { fetchImages } from "./js/pixabay-api";
import { renderImages, } from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.form');
const gallery = new SimpleLightbox('.gallery a', {
    caption: true,
    captionDelay: 250,
});

const loader = document.getElementById('loader');

searchForm.addEventListener('submit', event  => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim();
    if(!query) {
        return
    };
    
    loader.style.display = 'block';

    fetchImages(query)
    .then(images => {
        renderImages(images);
        gallery.refresh();
    })
    .catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
    })
    .finally(() => {
        loader.style.display = 'none';
    });
});