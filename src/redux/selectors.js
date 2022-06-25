import { createSelector, } from 'reselect'
export const listFilmSelector = (state) => state?.listFilm;
export const searchByNameSelector = (state) => state?.filterFilm?.name;
export const searchByCategories = (state) => state?.filterFilm?.categories;

export const allCategoriesSelector = (state) => {
    let listFilmTmp = [...state?.listFilm];
    let categoryFrequency = {};
    const categories = [];
    listFilmTmp.map( f => {
        categoryFrequency[f?.category] = categoryFrequency[f?.category] ? categoryFrequency[f?.category] + 1 : 1;
        return categoryFrequency;

    });
    for(let key in categoryFrequency){
        categories.push({
            value: key,
            label: key,
        })
    }
    return categories;
}

export const listFilmSearchByName = createSelector(
    listFilmSelector,
    searchByNameSelector,
    searchByCategories,
    (listFilm, name, categories,) => {
        const categoriesSelected = categories !== undefined && categories.length > 0;
        return listFilm?.filter( film =>  categoriesSelected ? film?.title?.toLowerCase()?.includes(name?.toLowerCase()) && categories.includes(film?.category)
         : film?.title?.toLowerCase()?.includes(name?.toLowerCase()) );
})
