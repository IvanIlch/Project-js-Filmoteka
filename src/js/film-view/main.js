import filmTempl from './templates/film-view.hbs';
import filmService from '../header/apiService';
import Pagination from '../header/pagination'

function renderFilmInfo(filmName) {
    const markup = filmTempl(filmName);
    refs.filmViewSection.insertAdjacentHTML('beforeend', markup);
};

refs.galleryList.addEventListener('click', async(e) => {
    const id = e.target.dataset.id;
    Pagination.clear();
    refs.filmsSection.classList.add('is-visible');
    refs.filmViewSection.classList.remove('is-visible');
    window.scrollTo({
        top: 100,
        behavior: "smooth"
    });

    renderFilmInfo(await filmService.getFilmId(id));
});