import typesActions from "./typeActions";

const {
    LIST_FILM_FETCH_DATA_TYPE,
    LIST_FILM_DELETE_FILM_TYPE,
    LIST_FILM_UPDATE_LIKE_TYPE,
    LIST_FILM_UPDATE_DISLIKE_TYPE,
} = typesActions || {};

const fetchListFilm = (listFilm) => {
    return {
        type: LIST_FILM_FETCH_DATA_TYPE,
        payload: listFilm,
    }
}

const deleteFilm = (id) => {
    return {
        type: LIST_FILM_DELETE_FILM_TYPE,
        payload: id,
    }
}

const updateLike = (likeInfoButton) => {
    return{
        type: LIST_FILM_UPDATE_LIKE_TYPE,
        payload: likeInfoButton,
    }
}

const updateDislike = (dislikeInfoButton) => {
    return{
        type: LIST_FILM_UPDATE_DISLIKE_TYPE,
        payload: dislikeInfoButton,
    }
}

const listFilmActions = {
    fetchListFilm,
    deleteFilm,
    updateLike,
    updateDislike,
}
export default listFilmActions;