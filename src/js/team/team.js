import personProfile from "../header/templates/profile.hbs"
import teamList from "../header/templates/team.json"
const teamListRef = document.getElementById('team-list');
const profileRef = document.getElementById('profile');
teamListRef.addEventListener('click', (event) => {
    const personID = Number(event.target.dataset.id);
    if (personID) {
        event.preventDefault();
        const profile = teamList.find((item) => item.id === personID);
        const markup = personProfile(profile);        
        profileRef.insertAdjacentHTML('beforeend', markup);
        showProfileSection(profileRef);
    }
});
function showProfileSection() {
    profileRef.classList.remove('is-visible');
    window.scrollTo({top: 0});
}