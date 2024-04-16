import {Dispatch, SetStateAction, useEffect} from "react";
import axios from "axios";
import {Movie} from "@/components/movie";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";

export const UseMovie = (id: number | null, setMovie: Dispatch<SetStateAction<Movie | null>>) => {
    const router = useRouter();

    useEffect(() => {
        const getMovieAsync = async (id: number, jwt: string) => {

            const movie = await getMovie(id, jwt, router);
            setMovie(movie);
        }

        const jwt = Cookies.get("JWT");
        if (id && jwt) {
            getMovieAsync(id, jwt);
        }
    }, [id]);
}

const getMovie = async (id: number, jwt: string, router: AppRouterInstance) => {
    if (id) {
        const url = `http://localhost:8080/api/movies/${id}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/json',
                }
            });

            return response.data;
        } catch (error) {
            router.push("/")
        }
    }
}