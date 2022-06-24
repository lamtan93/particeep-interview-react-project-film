import React from "react";
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import Proptypes from 'prop-types';
import ListFilm from "./ListFilm";
import listFilmActions from '../redux/actions/listFilmActions';
import { listFilmSearchByName } from "../redux/selectors";

const {
  deleteFilm,
} = listFilmActions || {};

const ListFilmView = ({
    words,
    listFilmFetchDataloading,
    listFilmFetchedData,
}) => {
    const dispatch = useDispatch();
    const listFilmByNameStore = useSelector(listFilmSearchByName);
    
    const handleDeleteFilm = (id) => {
        dispatch(deleteFilm(id))
    }
    return(
        <>
            {(!listFilmFetchDataloading && listFilmFetchedData) ? (
                <ListFilm
                   words={words}
                   listFilmByNameStore={listFilmByNameStore}
                   handleDeleteFilm={handleDeleteFilm}
                />
            ) : (
                <h1>{words?.LOADING}</h1>
            )}
        </>
    )
}

ListFilmView.propTypes = {
    words: Proptypes.shape({
        LOADING: Proptypes.string,
    }),
    listFilmFetchDataloading: Proptypes.bool,
    listFilmFetchedData: Proptypes.bool,
};

ListFilmView.defaultProps = {
    words: {},
    listFilmFetchDataloading: true,
    listFilmFetchedData: false,
};

export default ListFilmView;