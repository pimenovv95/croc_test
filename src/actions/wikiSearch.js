export const SEARCH_WIKI = 'SEARCH_WIKI';
export const RECEIVE_WIKI_SEARCH = 'RECEIVE_WIKI_SEARCH';
import {
  	ADD_CHECKED_ARTICLE,
  	DEL_CHECKED_ARTICLE,
} from '../constants/WikiSearch'

export const searchWiki = (text) => ({
    type: SEARCH_WIKI,
    text
});

export const receiveWikiSearch = ({data}) => ({
    type: RECEIVE_WIKI_SEARCH,
    data
});

export const addCheckedArticle = (href, title) => ({
  	type: ADD_CHECKED_ARTICLE,
  	payload: {href, title}
});

export const delCheckedArticle = (href) => ({
  	type: DEL_CHECKED_ARTICLE,
  	href  
});

