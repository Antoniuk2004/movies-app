import {Dispatch, SetStateAction, useEffect} from "react";
import axios from "axios";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";

export const UseMovies = (setMovies: Dispatch<SetStateAction<any>>, router: AppRouterInstance) => {
    useEffect(() => {
        const getMoviesAsync = async () => {
            const movies = await getMovies(router);
            setMovies(movies);
        }

        getMoviesAsync();
    }, []);
}

const getMovies = async (router: AppRouterInstance) => {
    const jwt = Cookies.get("JWT");

    if (jwt) {
        const url = "http://localhost:8080/api/movies/latest?limit=10";
        try {
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/json',
                }
            });
            return response.data;
        } catch (e) {
            router.push("/signin");
        }
    } else {
        router.push("/signin");
    }
}