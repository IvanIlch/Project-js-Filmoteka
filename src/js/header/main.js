refs.logo.addEventListener('click', () => {
    refs.header.classList.add('header-home');
    refs.navLinkHome.classList.add('site-site-navigation__link--active');

});

refs.burger.addEventListener('click', () => {
    refs.overlayHeader.classList.toggle('is-visible');
    refs.burger.classList.toggle('is-active');
    refs.nav.classList.toggle('flex');
    refs.nav.classList.toggle('is-visible');
    refs.searchForm.classList.toggle('is-visible');
    refs.siteNav.classList.toggle('is-visible');

});