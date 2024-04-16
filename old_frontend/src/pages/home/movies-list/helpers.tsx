import axios, {AxiosResponse} from "axios";
import {Dispatch, SetStateAction} from "react";
import {Movie} from "@/components/movie";
import {PostersMap} from "@/pages/home/movies-list/PostersMap";

export const getPoster = async (movie: Movie, jwt: string, setPosters: Dispatch<SetStateAction<PostersMap>>) => {
    const url = `http://localhost:8080/files/posters/${movie.poster}`;

    try {
        const response: AxiosResponse<Blob> = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
            responseType: 'blob',
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            const imageURL = reader.result as string;
            setPosters((prev) => (
                {
                    ...prev,
                    [movie.movieId]: imageURL
                }
            ))
        };
        reader.readAsDataURL(response.data);
    } catch (error) {
        console.error('Error fetching image URL:', error);
        return null;
    }
}

export const calcDuration = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    let minutesStr = minutes + "";
    if (minutes < 10) {
        minutesStr = "0" + minutes;
    }

    if (hours == 0) return `${minutesStr}m`
    else return `${hours}h ${minutesStr}m`
}