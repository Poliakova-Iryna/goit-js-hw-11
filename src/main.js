import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImg } from './js/pixabay-api';
import { createMarkup } from "./js/render-functions";

const refs = {
    form: document.querySelector('.form'),
    cardContainer: document.querySelector('.card-container'),
    dallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { query } = form.elements;

    if(!query.value.trim()) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term',
            position: 'topRight'
        });
        return
    }

    fetchImg(query.value.trim())
      .then(data => {
        if(data.hits.length === 0) {
            iziToast.warning({
                title: 'Warning',
                message: error.message,
                position: 'topRight'
            });
            return
        }

        createMarkup(data.hits, refs.gallery);
        form.reset();
    })
    .catch(error => {
        iziToast.error({
            title: 'Error',
            message: error.message,
            position: 'topRight'
        });
    });
}