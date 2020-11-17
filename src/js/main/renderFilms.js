import articlesTpl from './templates/articles.hbs';
import refs from '../helpers/reference';

function updateArticlesMarcup(articles) {
  const marcup = articlesTpl(articles);

  refs.galleryList.insertAdjacentHTML('beforeend', marcup);
}

export default updateArticlesMarcup;
