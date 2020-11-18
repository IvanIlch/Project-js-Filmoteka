const axios = require('axios');
const token = "bfce076e7c9a3c60d70abb15359c6391";

export default {

    searchQuery: '',
    page: 1,

    async getFilms() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${this.query}&page=${this.page}&include_adult=false&language=en-US&`);
            console.log(response.data);
            return response.data.results;
        } catch (error) {
            console.error(error);
        }
    },
    async getFilmId(id) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${token}&include_adult=false&language=en-US&`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    resetPage() {
        this.page = 1
    },
    incrementPage() {
        this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    }
};