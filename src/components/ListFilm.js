import PropType from 'prop-types';
import Film from "./Film";
const ListFilm = ({
    words,
    listFilmByNameStore,
    handleDeleteFilm,
}) => {
    return(
        <>
            {listFilmByNameStore.length > 0 ? (
                <div className="listFilm">
                    {listFilmByNameStore?.map(film =>(
                        <Film 
                            words={words}
                            key={film?.id} 
                            film={film}
                            handleDeleteFilm={handleDeleteFilm} 
                            percentageLikes={film?.percentageLikesDislikes?.percentageLikes}
                            percentageDislikes={film?.percentageLikesDislikes?.percentageDislikes}
                        />
                    ))}
                </ div>
            ) : (
                    <h1>{words?.AUCUN_FILM_TROUVE}</h1>
            )}
          </>  
    )
}

ListFilm.propTypes = {
    words: PropType.shape({
        AUCUN_FILM_TROUVE: PropType.string,
    }),
    listFilmByNameStore: PropType.array,
    handleDeleteFilm: PropType.func,
};

ListFilm.defaultProps = {
    words: {},
    listFilmByNameStore: null,
    handleDeleteFilm: null,
};

export default ListFilm;

