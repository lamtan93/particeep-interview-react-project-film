import typesActions from "./typeActions";

const {
    FILTER_SEARCH_BY_NAME_TYPE,
    FILTER_SEARCH_BY_CATEGORIES_TYPE,
} = typesActions || {};

const searchByName = (name) => {
    return{
        type: FILTER_SEARCH_BY_NAME_TYPE,
        payload: name,
    }
}

const searchByCategories = (categories) => {
    return{
        type: FILTER_SEARCH_BY_CATEGORIES_TYPE,
        payload: categories,
    }
}

const filterFilmAction = {
    searchByName,
    searchByCategories,
}
export default filterFilmAction;