import iziToast from "izitoast";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46090964-55e0ede1337bbc868df4332a0";

export function fetchImages(query) {
   const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
   });

   return fetch(`${BASE_URL}?${params}`)
   .then(response => {
    if(!response.ok) {
        throw new Error ('Something went wrong..');
    }
    return response.json();
   })
   .then(data => {
    if(data.hits.length === 0) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
    }
    return data.hits;
   });
}