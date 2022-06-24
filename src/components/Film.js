import { useState } from 'react';
import { useDispatch, } from 'react-redux';
import PropType from 'prop-types';
import mountain from '../data/img/the-last-mountain.jpg';
import listFilmActions from '../redux/actions/listFilmActions';

const {
    updateLike,
    updateDislike,
} = listFilmActions || {};

const Film = ({
    words,
    film,
    handleDeleteFilm,
    percentageLikes,
    percentageDislikes,
}) => {
    const dispatch = useDispatch();
    const [
        isClickedLikeButton,
        setIsClickedLikeButton,
    ] = useState(false);

    const [
        isClickedDislikeButton,
        setIsClickedDislikeButton,
    ] = useState(false);

    const [
        styleClickedLikeButton,
        setStyleClickedLikeButton,
    ] = useState(null);

    const [
        styleClickedDislikeButton,
        setStyleClickedDislikeButton,
    ] = useState(null);

    const handleLikeClick = (id) => {
        setIsClickedLikeButton(!isClickedLikeButton);
        if(!isClickedLikeButton){
            setStyleClickedLikeButton({
                color: "white",
                backgroundColor: "#129cf7",
                cursor: "pointer",
            })
            setIsClickedDislikeButton(false);
            setStyleClickedDislikeButton(null);
            dispatch(updateLike({id, isClicked: true}));
        }else{
            setStyleClickedLikeButton(null);
            dispatch(updateLike({id, isClicked: false}));
        }
    }

    const handleDislikeClick = (id) => {
        setIsClickedDislikeButton(!isClickedDislikeButton);
        if(!isClickedDislikeButton){
            setStyleClickedDislikeButton({
                backgroundColor: "red",
                color: "white",
                cursor: "pointer"
            })
            setIsClickedLikeButton(false);
            setStyleClickedLikeButton(null);
            dispatch(updateDislike({id, isClicked: true}));
        }else{
            setStyleClickedDislikeButton(null);
            dispatch(updateDislike({id, isClicked: false}));
        }
    }
    return(
        <>
            <div className="film">
                <div className="film-head">
                    <p>{film?.title}</p>
                    <span>{`#${film?.category}`}</span>
                </div>
                <img src={mountain} alt="mountain-img"/>
                <div className="jauges">
                    <div style={{width: percentageLikes }} className="jaugeLike"></div>
                    <div style={{width: percentageDislikes }} className="jaugeDislike"></div>
                </div>
                <div className="film-bottom" >
                    <div className="likeDislikeButton">
                        <button style={styleClickedLikeButton} className="likeButtton" onClick={() => handleLikeClick(film?.id)} >Like({film?.likes})</button>
                        <button style={styleClickedDislikeButton} className="dislikeButtton" onClick={() => handleDislikeClick(film?.id)}>DisLike({film?.dislikes})</button>
                    </div>
                    <button className="deleteButtton" onClick={() => handleDeleteFilm(film?.id)}>{words?.DELETE_LABEL}</button>
                </div>
            </div>
        </>
    )
}


Film.propTypes = {
    words: PropType.shape({
        DELETE_LABEL: PropType.string,
    }),
    film: PropType.object,
    handleDeleteFilm: PropType.func,
    percentageLikes: PropType.string,
    percentageDislikes: PropType.string,
};

Film.defaultProps = {
    words: {},
    film: {},
    handleDeleteFilm: null,
    percentageLikes: null,
    percentageDislikes: null,
};

export default Film;