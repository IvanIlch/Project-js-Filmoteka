import filmTempl from './templates/film-view.hbs';
import filmService from '../header/apiService';

function updateArticlesMakcup(articles) {
    const markup = filmTempl(articles);
    refs.filmViewSection.insertAdjacentHTML('beforeend', markup);
}

refs.galleryList.addEventListener('click', async(e) => {
    const id = e.target.dataset.id;

    refs.filmsSection.classList.add('is-visible');
    refs.filmViewSection.classList.remove('is-visible');
    window.scrollTo({
        top: 100,
        behavior: "smooth"
    });

    updateArticlesMakcup(await filmService.getFilmId(id));
})