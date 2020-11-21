import './refChangeHeader';
import filmService from './apiService';
import renderFilms from './renderFilms';

async function topFilms() {
    renderFilms(await filmService.getPopularFilms())
};

function getGallery() {
    if (refs.galleryList.children.length > 0) {
        refs.galleryList.innerHTML = '';
        topFilms()
    } else {
        topFilms()
    }
}

getGallery();