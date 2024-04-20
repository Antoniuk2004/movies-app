import {WatchingStatus} from "@/types/WatchingStatus";
import {movieSignal} from "@/signals/movie-signal";
import axios from "axios";
import Cookies from "js-cookie";
import {changeWatchingStatusDistribution} from "@/pages/movies/[id]/helpers";

export const updateWatchingStatus = async (newStatus: WatchingStatus) => {
    const statuses = Object.values(WatchingStatus);
    const statusIndex = statuses.indexOf(newStatus) + 1;

    const {movieId} = movieSignal.value;

    try {
        const url = `http://localhost:8080/api/movies/${movieId}/watching-status`

        await axios.put(url, {
            watchingStatusId: statusIndex,
        }, {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })
    } catch (e) {
        console.log(e);
    }

    changeWatchingStatusDistribution(newStatus);
}