import axios, {CancelTokenSource} from "axios";
import Cookies from "js-cookie";
import {FilterParams} from "@/types/FilterParams";
import {Dispatch, SetStateAction} from "react";
import {Movie} from "@/types/Movie";
import {setMovieCovers} from "@/utils/utils";

export const movieSearchRequest = async (filterParams: FilterParams,
                                         cancelToken: CancelTokenSource,
                                         setCancelToken: Dispatch<SetStateAction<CancelTokenSource>>,
                                         setMovies: Dispatch<SetStateAction<Movie[]>>) => {
    if (cancelToken) {
        cancelToken.cancel('Operation canceled by the user.');
    }
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    if(filterParams.search.length < 3) {
        setMovies([]);
        return;
    }

    const url = 'http://localhost:8080/api/movies/filter';
    try {
        let response = await axios.post(url, {...filterParams}, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('jwt'),
            },
            cancelToken: newCancelToken.token
        });

        setMovies(await setMovieCovers(response.data));
    } catch (e) {
        return [];
    }
}