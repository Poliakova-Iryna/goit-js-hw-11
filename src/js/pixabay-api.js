const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46090964-55e0ede1337bbc868df4332a0";

export function fetchImg(searchQuery = '') {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`)
       .then(response => {
        if(!response.ok) {
            throw new Error('Sorry. there are no images matching your  search query Please try again!')
        }

        return response.json();
    });
}