import MyLibrary from "./MyLibraryView";

const onDeleteClick = () => {
    const itemList = document.querySelector('.library-movies');

    itemList.addEventListener('click', event => {
        if (event.target.nodeName === 'BUTTON') {
            const { id } = event.path[2].dataset;
            if (document.querySelector('.header-buttons button.is-active').textContent.toLowerCase() === 'watched') {
                const storageWatched = JSON.parse(localStorage.getItem('watched'));
                const watched = storageWatched.filter(item => item.id != id);
                const watchedString = JSON.stringify(watched);
                localStorage.setItem('watched', watchedString);
                MyLibrary.getWatched();
            }
            if (document.querySelector('.header-buttons button.is-active').textContent.toLowerCase() === 'queue') {
                const storageQueue = JSON.parse(localStorage.getItem('queue'));
                const queue = storageQueue.filter(item => item.id != id);
                const queueString = JSON.stringify(queue);
                localStorage.setItem('queue', queueString);
                MyLibrary.getQueue();
            }
        }
    })
}

export default onDeleteClick;