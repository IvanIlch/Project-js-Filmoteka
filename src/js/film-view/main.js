refs.galleryList.addEventListener('click', (e) => {
    console.log(e);
    refs.filmsSection.classList.add('is-visible');
    refs.filmViewSection.classList.remove('is-visible');
    window.scrollTo({
    top: 100,
    behavior: "smooth"
});
})

