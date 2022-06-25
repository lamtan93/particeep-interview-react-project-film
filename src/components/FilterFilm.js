import { useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { allCategoriesSelector } from '../redux/selectors';
import Select from 'react-select';
import filterFilmAction from '../redux/actions/filterFilmActions';

const {
  searchByName,
  searchByCategories,
} = filterFilmAction || {};

const FilterFilm = ({
    words,
}) => {

const dispatch = useDispatch();
const allCategoriesStore = useSelector(allCategoriesSelector);
    
const [
    filmName,
    setFilmName,
] = useState('');

const [
    filterChangeCategories,
    setFilterChangeCategories,
] = useState([]);

const handleOnChangeSearchByName = (e) => {
    setFilmName(e?.target?.value);
    dispatch(searchByName(e?.target?.value));
}
const handleFilterChangeCategories = (categoriesArrObj) => {
    setFilterChangeCategories(categoriesArrObj);
    const categories = [];
    categoriesArrObj.map( c => categories.push(c?.value))
    dispatch(searchByCategories(categories));    
}
    return(
        <div className="filter-film">
            <div className="filter-film-by-name">
                <h4>{words?.SEARCH_BY_NAME_LABEL}</h4>
                <input type="text" placeholder="Chercher votre film" value={filmName} onChange={handleOnChangeSearchByName} />
            </div>
            <div className="filter-film-by-multiple-categorie">
            <h4>{words?.SEARCH_BY_MULTIPLE_CATEGORIE}</h4>
            <Select value={filterChangeCategories}
                onChange={handleFilterChangeCategories}
                options={allCategoriesStore} 
                placeholder="Choisir une ou plusieurs catégorie(s)"
                isMulti
            />
            </div>
        </div>
        
    )
}

export default FilterFilm;