import './refChangeHeader';
import filmService from './apiService';
import articlesTpl from "./templates/articles.hbs"

function updateArticlesMakcup(articles) {
    const markup = articlesTpl(articles);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

refs.searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const form = event.currentTarget;
    filmService.query = form.elements.query.value;

    refs.galleryList.innerHTML = '';

    filmService.resetPage();
    updateArticlesMakcup(await filmService.getFilms());
    // updateArticlesMakcup(await filmService.getFilmId());
    form.reset();
});