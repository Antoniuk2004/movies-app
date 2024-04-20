import {WatchingStatus} from "@/types/WatchingStatus";
import {movieSignal} from "@/signals/movie-signal";
import axios from "axios";
import Cookies from "js-cookie";
import {changeRatingDistribution, changeWatchingStatusDistribution} from "@/pages/movies/[id]/helpers";

export const updateRating = async (rating: number) => {
    const {movieId} = movieSignal.value;

    try {
        const url = `http://localhost:8080/api/movies/${movieId}/rating`

        await axios.put(url, {
            rating: rating,
        }, {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })
    } catch (e) {
        console.error(e);
    }

    changeRatingDistribution(rating);
}