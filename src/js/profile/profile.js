const profileModal = document.getElementById('profile'),
      profileCloseBtn = document.querySelector('.profile__close')
profileModal.addEventListener('dblclick', (event) => {
    if (event.target.dataset.close) {
        event.preventDefault();
        hideProfile();
    }
});
profileCloseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    hideProfile();
});
// profileModal.addEventListener('keydown', logKey);
function hideProfile () {
    profileModal.classList.add('is-visible');
    const profileModalRef = document.querySelector('.profile-modal');
    profileModalRef.remove();
}





