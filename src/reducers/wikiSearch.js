import {RECEIVE_WIKI_SEARCH} from '../actions/wikiSearch';
import {
	SET_ARTICLES_DATA,
  	ADD_CHECKED_ARTICLE,
  	DEL_CHECKED_ARTICLE,
} from '../constants/WikiSearch'

export const wikiSearch = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_WIKI_SEARCH:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};

const initialState = {
  checkedArticles: []
}

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHECKED_ARTICLE:
      return {...state, checkedArticles: [...state.checkedArticles, 
      	{href: action.payload.href, title: action.payload.title}]};

    case DEL_CHECKED_ARTICLE:
    	const updatedCheckedArticles = {...state}.checkedArticles;
    	const indexToRemove = updatedCheckedArticles.findIndex(obj => obj.href == action.payload);
    	let deletedCheckedArticles = updatedCheckedArticles.splice(indexToRemove , 1);
      return {...state, checkedArticles: [...updatedCheckedArticles]};


    default:
      return state;
  }

}