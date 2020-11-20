import filmService from '../header/apiService';
import '../header/main';
import articlesTpl from '../header/templates/articles.hbs';

clearGallery();

refs.logo.addEventListener('click', () => {
    refs.filmsSection.classList.remove('is-visible');
    refs.navLinkHome.classList.add('site-navigation__link--active');
    classListHome();
    setHomeActive();
});

refs.logo.addEventListener('click', async e => {
    refs.galleryList.innerHTML = '';
    updateArticlesMakcup(await filmService.getPopularFilms());
});

refs.burger.addEventListener('click', clickOnBurger);

refs.navLinkLibrary.addEventListener('click', (e) => {
    refs.navLinkLibrary.classList.add('site-navigation__link--active');
    classListLibrary()
    if (refs.navLinkHome.classList.contains('site-navigation__link--active')) {
        refs.navLinkHome.classList.remove('site-navigation__link--active');
        refs.navLinkLibrary.classList.add('site-navigation__link--active');
    }
});

refs.navLinkHome.addEventListener('click', (e) => {
    classListHome();
    if (refs.navLinkLibrary.classList.contains('site-navigation__link--active')) {
        setHomeActive();
    }
});

refs.navLinkHome.addEventListener('click', async e => {
    refs.galleryList.innerHTML = '';
    updateArticlesMakcup(await filmService.getPopularFilms())
});

refs.buttonHomeOnBurger.addEventListener('click', () => {
    classListHome();
    closeBurger()
});

refs.buttonLibraryOnBurger.addEventListener('click', () => {
    classListLibrary();
    closeBurger();
});

refs.filmsSection.addEventListener('click', e => {
    refs.header.classList.add('header-details');
    refs.header.classList.remove('header-home');
    refs.header.classList.remove('header-library');
    refs.searchForm.classList.add('is-visible');
    refs.navLinkHome.classList.remove('site-navigation__link--active');
    refs.filmViewSection.innerHTML = '';
});

refs.navLinkLibrary.addEventListener('click', e => {
    if (refs.header.classList.contains('header-details')) {
        refs.header.classList.add('header-library');
        refs.header.classList.remove('header-details');
    };
});

function updateArticlesMakcup(articles) {
    const markup = articlesTpl(articles);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
};

async function topFilms() {
    updateArticlesMakcup(await filmService.getPopularFilms())
};

function classListHome() {
    refs.header.classList.remove('header-library');
    refs.header.classList.remove('header-details');
    refs.header.classList.add('header-home');
    refs.searchForm.classList.remove('is-visible');
    refs.headerButtons.classList.add('is-visible');
    refs.headerButtons.classList.remove('flex');
    refs.filmViewSection.classList.add('is-visible');
    refs.galleryList.classList.remove('is-visible');
    refs.filmsSection.classList.remove('is-visible');
    refs.navLinkHome.classList.add('site-navigation__link--active');
    refs.header.classList.remove('header-details');
};

function classListLibrary() {
    refs.header.classList.remove('header-home');
    refs.header.classList.add('header-library');
    refs.searchForm.classList.add('is-visible');
    refs.headerButtons.classList.remove('is-visible');
    refs.headerButtons.classList.add('flex');
    refs.filmViewSection.classList.add('is-visible');
};

function setHomeActive() {
    refs.navLinkLibrary.classList.remove('site-navigation__link--active');
    refs.navLinkHome.classList.add('site-navigation__link--active');
};

function clickOnBurger() {
    refs.overlayHeader.classList.toggle('is-visible');
    refs.burger.classList.toggle('is-active');
    refs.nav.classList.toggle('flex');
    refs.nav.classList.toggle('is-visible');
    refs.searchForm.classList.add('is-visible');
    refs.siteNav.classList.toggle('is-visible');
    refs.headerButtons.classList.add('is-visible');
    refs.headerButtons.classList.remove('flex');
    if (refs.header.classList.contains('header-library')) {
        refs.searchForm.classList.add('is-visible');
        if (!refs.burger.classList.contains('is-active')) {
            refs.headerButtons.classList.remove('is-visible');
            refs.headerButtons.classList.add('flex');
        }
    }
};

function closeBurger() {
    refs.burger.classList.remove('is-active');

    refs.nav.classList.remove('is-visible');
    refs.nav.classList.add('flex');
    refs.overlayHeader.classList.add('is-visible');
};

function clearGallery() {
    if (refs.galleryList.children.length > 0) {
        refs.galleryList.innerHTML = '';
        topFilms()
    } else {
        topFilms()
    }
}