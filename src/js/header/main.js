import './refChangeHeader';
import filmService from './apiService';
// import renderFilms from '../main/renderFilms';
import articlesTpl from "./templates/articles.hbs"

function updateArticlesMakcup(articles) {
    const markup = articlesTpl(articles);
    console.log(markup);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

refs.searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const form = event.currentTarget;
    filmService.query = form.elements.query.value;

    refs.galleryList.innerHTML = '';

    filmService.resetPage();
    updateArticlesMakcup(await filmService.getFilms());
    form.reset();
});