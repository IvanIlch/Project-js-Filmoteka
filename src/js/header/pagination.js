import filmService from './apiService';
import renderFilms from './renderFilms'
const pagination = require('pagination');


const Pagination = {
    items: null,
    init() {
        filmService.getFilmsPagination().then(data => {
            this.items = data.data.total_pages;
        }).then(() => {
            const paginationWrapper = document.createElement('div');
            paginationWrapper.classList.add('pagination__wrapper');
            refs.pagination.append(paginationWrapper);

            const options = {
                currentPage: 1,
                totalItems: this.items,
                itemsPerPage: 1,
                step: 2,
                onInit: loadContent,
            }

            const loadContent = (currentPage) => {
                onPaginationClick(currentPage);
            }

            const pag1 = new pagination(paginationWrapper, options);
            paginationWrapper.querySelector('.arrowLeft').innerHTML = '';
            paginationWrapper.querySelector('.arrowRight').innerHTML = '';
            pag1.onPageChanged(loadContent);

        })
    },

    clear() {
        refs.pagination.innerHTML = '';
    }
}

export default Pagination;


const onPaginationClick = (page) => {
    //   refs.warning.textContent = '';
    //   startSpin();
    filmService
        .getFilmsPaginationByPage(page)
        .then((data) => {
            console.log(data.data.results);
            refs.galleryList.innerHTML = '';
            renderFilms(data.data.results);
        })
        .then(() => clickListener())
        .catch((error) => console.log(error));
}

const clickListener = () => {
    const movie = document.querySelector(".list-films");
    movie.addEventListener("click", (event) => {
        event.preventDefault();
        // refs.warning.textContent = "";
        const { id } = event.target.dataset;
        // filmService
        //   .getFilmId(id)
        //   .then((data) => {
        //     refs.galleryList.innerHTML = "";
        //     // detailsPageMarkUp(data, refs.main);
        //     refs.routes.forEach((item) => item.classList.remove("selected"));
        //   })

    });
};

Pagination.init()










// refs.searchForm.addEventListener('submit', async (e) => {

//     e.preventDefault();

//     const form = e.currentTarget;
//     filmService.query = form.elements.query.value;

//     refs.galleryList.innerHTML = '';
//     await filmService.getFilmsPagination()
//     filmService.resetPage();

//     // await buildTable();

//     form.reset();
// })