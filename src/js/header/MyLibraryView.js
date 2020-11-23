import libraryPage from "./templates/library.hbs";
import onDeleteClick from "./onDeleteClick";
import placeholder from "./placeholderLibrary";


const MyLibrary = {
    getWatched() {
        const data = JSON.parse(localStorage.getItem("watched")) || [];
        refs.galleryList.innerHTML = "";
        if (data.length === 0) {
            placeholder(refs.galleryList, "watched");
        }
        this.myLibraryMarkUp(data, refs.galleryList);
        onDeleteClick();
    },

    getQueue() {
        const data = JSON.parse(localStorage.getItem("queue")) || [];
        refs.galleryList.innerHTML = "";
        if (data.length === 0) {
            placeholder(refs.galleryList, "queue");
        }
        this.myLibraryMarkUp(data, refs.galleryList);
        onDeleteClick();
    },

    myLibraryMarkUp(data, ref) {
        const newData = data.map((item) => {
            item.release_date = item.release_date.slice(0, 4);
            return item;
        });
        const markUp = libraryPage(newData);
        ref.insertAdjacentHTML("beforeend", markUp);
    },

    init() {
        refs.form.classList.add("none");
        refs.buttonBox.innerHTML = "";

        const watchedButton = document.createElement("button");
        watchedButton.type = "button";
        watchedButton.classList.add("library__button");
        watchedButton.classList.add("library__button--active");
        watchedButton.textContent = "Watched";
        watchedButton.addEventListener("click", () => {
            queueButton.classList.remove("library__button--active");
            watchedButton.classList.add("library__button--active");
            this.getWatched();
        });

        const queueButton = document.createElement("button");
        queueButton.type = "button";
        queueButton.classList.add("library__button");
        queueButton.textContent = "Queue";
        queueButton.addEventListener("click", () => {
            watchedButton.classList.remove("library__button--active");
            queueButton.classList.add("library__button--active");
            this.getQueue();
        });

        const buttonsMarkup = [watchedButton, queueButton];
        refs.buttonBox.append(...buttonsMarkup);

        this.getWatched();
    },
};

export default MyLibrary;