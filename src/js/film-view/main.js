import '../helpers/reference'
refs.galleryList.addEventListener('click', (e) => {
    console.log(e.target);
    refs.filmSection.classList.add('is-visible');
    refs.filmViewSection.classList.remove('is-visible');

})