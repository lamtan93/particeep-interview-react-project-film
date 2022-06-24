import typesActions from "../actions/typeActions";

const {
    FILTER_SEARCH_BY_NAME_TYPE,
    FILTER_SEARCH_BY_CATEGORIES_TYPE,
} = typesActions || {};

const initState = {
    name: '',
    categories: [],
}

const filterFilmReducer = (state = initState, action) => {
    switch(action?.type){
        case FILTER_SEARCH_BY_NAME_TYPE:
            return {
                ...state,
                name: action?.payload,
            };
        case FILTER_SEARCH_BY_CATEGORIES_TYPE:
            return{
                ...state,
                categories: action?.payload,
            }
        default:
            return state;
    }
};

export default filterFilmReducer;