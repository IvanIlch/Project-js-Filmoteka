refs.logo.addEventListener('click', () => {
    classListHome();
    setHomeActive();
});
refs.burger.addEventListener('click', clickOnBurger);
refs.navLinkLibrary.addEventListener('click', (e) => {
    classListLibrary()
    if (refs.navLinkHome.classList.contains('site-navigation__link--active')) {
        refs.navLinkHome.classList.remove('site-navigation__link--active');
        refs.navLinkLibrary.classList.add('site-navigation__link--active');
    }
})
refs.navLinkHome.addEventListener('click', (e) => {
    classListHome()
    if (refs.navLinkLibrary.classList.contains('site-navigation__link--active')) {
        setHomeActive();
    }
})
refs.buttonHomeOnBurger.addEventListener('click', () => {
    classListHome();
    closeBurger()
})
refs.buttonLibraryOnBurger.addEventListener('click', () => {
    classListLibrary();
    closeBurger();   
})
function classListHome() {
    refs.header.classList.remove('header-library');
    refs.header.classList.add('header-home');
    refs.searchForm.classList.remove('is-visible');
    refs.headerButtons.classList.add('is-visible');
    refs.headerButtons.classList.remove('flex');
}
function classListLibrary() {
    refs.header.classList.remove('header-home');
    refs.header.classList.add('header-library');
    refs.searchForm.classList.add('is-visible');
    refs.headerButtons.classList.remove('is-visible');
    refs.headerButtons.classList.add('flex')

}
function setHomeActive() {
    refs.navLinkLibrary.classList.remove('site-navigation__link--active');
    refs.navLinkHome.classList.add('site-navigation__link--active');
}
function clickOnBurger() {
    refs.overlayHeader.classList.toggle('is-visible');
    refs.burger.classList.toggle('is-active');
    refs.nav.classList.toggle('flex');
    refs.nav.classList.toggle('is-visible');
    refs.searchForm.classList.toggle('is-visible');
    refs.siteNav.classList.toggle('is-visible');
    refs.headerButtons.classList.add('is-visible');
    refs.headerButtons.classList.remove('flex');
}
function closeBurger() {
    refs.burger.classList.remove('is-active');
    refs.nav.classList.remove('is-visible');
    refs.nav.classList.add('flex');
    refs.overlayHeader.classList.add('is-visible');
}