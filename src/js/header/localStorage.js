import filmService from './apiService'
const toLocalWatch = [];
const toLocalQueue = [];

function addToWatch(id) {
    const addToWatch = document.querySelector('.film-view-buttons--watched');
    addToWatch.addEventListener('click',async (e) => {
        e.preventDefault();
        const object = await filmService.getFilmId(id);
        toLocalWatch.push(object);
        localStorage.setItem('toWatch', JSON.stringify(toLocalWatch));
    })
}

function addToQueue(id) {
    const addToQueue = document.querySelector('.film-view-buttons--queue');
    addToQueue.addEventListener('click',async (e) => {
        e.preventDefault();
        const object = await filmService.getFilmId(id);
        toLocalQueue.push(object);
        localStorage.setItem('toQueue', JSON.stringify(toLocalQueue));
    })
}


export {addToWatch, addToQueue}