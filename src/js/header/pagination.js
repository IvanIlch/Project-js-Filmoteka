import '../helpers/reference'
import filmService from './apiService';
import renderFilms from './renderFilms'
import genresIds from './genres'
const pagination = require('pagination');


const Pagination = {
    items: null,
    init(fetch) {
        fetch.then(data => {
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
    filmService
        .getFilmsPaginationByPage(page)
        .then((data) => {
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
// function getGenres(response) {
//     const newData =  response.data.results.map(item => {
//               let newGenres = [];
//               try{item.genre_ids.map(id => {
//                   const found = genresIds.find(item => item.id === id);
//                   console.log(found);
//           newGenres.push(found.name);
//               });
//               }
//               catch { console.log("Сломалось");}
//         if (newGenres.length >= 3) {
//           const normalizedGenres = newGenres.slice(0, 2);
//           normalizedGenres.push('Other');
//           item.genre_ids = normalizedGenres.join(', ');
//           item.release_date = item.release_date.slice(0, 4);
//         } else {
//           item.genre_ids = newGenres.join(', ');
//           if (item.release_date)
//             item.release_date = item.release_date.slice(0, 4);
//         }
//         return item;
//       });
//       return newData;
// }

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