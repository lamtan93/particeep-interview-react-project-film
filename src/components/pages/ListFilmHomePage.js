import React, { Component, } from 'react';
import store from '../../redux/store';
import Header from '../Header';
import FilterFilm from '../FilterFilm';
import ListFilmView from '../ListFilmView';
import listFilmActions from '../../redux/actions/listFilmActions';
import { moviesApi } from '../..//data/moviesApi';
import filmDico from '../common/filmDico';

const {
 fetchListFilm,
} = listFilmActions || {};

class ListFilmHomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            listFilmFetchDataloading: true,
            listFilmFetchedDataError: null,
            listFilmFetchedData: false,
          }
          moviesApi.then(
            (listFilm) => {
                store?.dispatch(fetchListFilm(listFilm));
                this.setState({
                    listFilmFetchDataloading: false,
                    listFilmFetchedDataError: null,
                    listFilmFetchedData: true,
                })
            },

          )

    }

    render(){
        const {
            listFilmFetchDataloading,
            listFilmFetchedDataError,
            listFilmFetchedData,
        } = this.state || {};
        return(
            <div className='listFilmHomePage'>
                <Header 
                    words={filmDico}
                />
                <FilterFilm 
                    words={filmDico}
                />
                <ListFilmView 
                    words={filmDico}
                    listFilmFetchDataloading={listFilmFetchDataloading}
                    listFilmFetchedDataError={listFilmFetchedDataError}
                    listFilmFetchedData={listFilmFetchedData}
                />
            </div>
        )
    }
}

export default ListFilmHomePage;