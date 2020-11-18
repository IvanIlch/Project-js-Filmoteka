import './refChangeHeader';
import filmService from './apiService';
import articlesTpl from "./templates/articles.hbs";

refs.searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const form = event.currentTarget;
    filmService.query = form.elements.query.value;

    refs.galleryList.innerHTML = '';

    filmService.resetPage();
    updateArticlesMakcup(await filmService.getFilms());
    form.reset();
});

function updateArticlesMakcup(articles) {
    const markup = articlesTpl(articles);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

refs.logo.addEventListener('click', async e => {
    updateArticlesMakcup(await filmService.getPopularFilms())
});

refs.navLinkHome.addEventListener('click', async e => {
    updateArticlesMakcup(await filmService.getPopularFilms())
});

async function topFilms() {
    updateArticlesMakcup(await filmService.getPopularFilms())
};
topFilms();