import person from "../header/templates/person.hbs"
import teamList from "../header/templates/team.json"
const sectionFilmsRef = document.querySelector('.films'),
      sectionFilmViewRef = document.querySelector('.film-view-section'),
      sectionTeamRef = document.querySelector('.team'),
      footerLinkRef = document.getElementById('footer__link');
footerLinkRef.addEventListener('click', (e) => {
    const markup = person(teamList);
    const teamListRef = document.getElementById('team-list');    
    teamListRef.innerHTML = '';
    teamListRef.insertAdjacentHTML('beforeend', markup);
    e.preventDefault();
    showTeamSection();
});
function showTeamSection() {
    sectionFilmsRef.classList.add('is-visible');
    sectionFilmViewRef.classList.add('is-visible');
    sectionTeamRef.classList.remove('is-visible');
    window.scrollTo({top: 0});
}