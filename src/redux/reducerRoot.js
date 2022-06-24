import { combineReducers, } from 'redux';
import filterFilmReducer from "./reducers/filterFilmReducer";
import listFilmReducer from "./reducers/listFilmReducer";


// const reducerRoot = (state = {}, action) => {
//     return{
//         filterFilm: filterFilmReducer(state?.filterFilm, action),
//         listFilm: listFilmReducer(state?.listFilm, action),
//     }
// }

const reducerRoot = combineReducers({
    filterFilm: filterFilmReducer,
    listFilm: listFilmReducer,
});

export default reducerRoot;