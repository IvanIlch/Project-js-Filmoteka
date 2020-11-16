import articlesTpl from "./templates/articles.hbs"
import refs from "../helpers/reference"


function updateArticlesMarcup(articles) {
    const marcup = articlesTpl(articles);
  
    refs.galleryList.insertAdjacentHTML('beforeend', marcup);
  }
  
  export default updateArticlesMarcup;

//  const axios = require('axios');


const apiKey = '18753901-48fe4160ef12c9ad3fe1a3bef'

function fechArticles(serchQuery){
   return axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${serchQuery}&page=1&per_page=12&key=${apiKey}`)
    .then(({data})=>data.hits)
}
export default fechArticles