import typesActions from "../actions/typeActions";
import utils from "../../components/common/utils";


const {
    getPercentagesLikesDislikes,
} = utils || {};

const {
    LIST_FILM_FETCH_DATA_TYPE,
    LIST_FILM_DELETE_FILM_TYPE,
    LIST_FILM_UPDATE_LIKE_TYPE,
    LIST_FILM_UPDATE_DISLIKE_TYPE,
} = typesActions || {};


const initState = [
    {
        id: '0',
        title: 'Corgi',
        category: 'Horror',
        likes: 100,
        dislikes: 15
    },
];
const listFilmReducer = (state = initState, action) => {
    switch(action?.type){
        case LIST_FILM_FETCH_DATA_TYPE:
            const listFilmWithPercentageLikesDislikes = action?.payload?.map( a => {
                return {
                    ...a,
                    percentageLikesDislikes: getPercentagesLikesDislikes(a?.likes, a?.dislikes),
                }
            })
            return [...listFilmWithPercentageLikesDislikes];
        case LIST_FILM_DELETE_FILM_TYPE:
            return state?.filter( f => f?.id !== action.payload);
        
        case LIST_FILM_UPDATE_LIKE_TYPE:
            let filmLiked = state?.filter( f => f?.id === action?.payload?.id)[0];
            if(action?.payload?.isClicked){
                 filmLiked['likes']++;
            }else{
                filmLiked['likes']--;
            }    
            filmLiked['percentageLikesDislikes']= getPercentagesLikesDislikes(filmLiked?.likes, filmLiked?.dislikes);
            return state;
        
        case LIST_FILM_UPDATE_DISLIKE_TYPE:
            let filmDisliked = state?.filter( f => f?.id === action?.payload?.id)[0];
            if(action?.payload?.isClicked){
                filmDisliked['dislikes']++;
            }else{
                filmDisliked['dislikes']--;
            }  
            filmDisliked['percentageLikesDislikes']= getPercentagesLikesDislikes(filmDisliked?.likes, filmDisliked?.dislikes);
            return state;
        default: 
            return state;
    }
};

export default listFilmReducer;

