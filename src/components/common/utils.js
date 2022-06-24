const getPercentagesLikesDislikes = (likesNumber, disLikesNumber) => {
    const total = likesNumber + disLikesNumber;
    const resultPercentageLikesDislikes = {
        percentageLikes: 0,
        percentageDislikes: 0,
    };
    if(likesNumber === disLikesNumber){
        resultPercentageLikesDislikes.percentageLikes = `${50}px`;
        resultPercentageLikesDislikes.percentageDislikes = `${50}px`;
    }else {
        resultPercentageLikesDislikes.percentageLikes = `${Math.floor((likesNumber/total)*100)}px`;
        resultPercentageLikesDislikes.percentageDislikes = `${Math.floor((disLikesNumber/total)*100)}px`;
    }
    return resultPercentageLikesDislikes;
}

const utils = {
    getPercentagesLikesDislikes,
};

export default utils;