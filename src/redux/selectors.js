import { createSelector, } from 'reselect'
export const listFilmSelector = (state) => state?.listFilm;
export const searchByNameSelector = (state) => state?.filterFilm?.name;
export const searchByCategories = (state) => state?.filterFilm?.categories;

export const allCategoriesSelector = (state) => {
    let listFilmTmp = [...state?.listFilm];
    let categories = [];
    let i = 0;
    for(let j = 1; j < listFilmTmp.length; j++){
        let cateroryI = listFilmTmp[i]?.category;
        let categoryJ = listFilmTmp[j]?.category
            if(cateroryI !== categoryJ){
                i++;
                listFilmTmp[i] = listFilmTmp[j];
                categories.push({
                    label: cateroryI,
                    value: cateroryI,
                })
            }
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
