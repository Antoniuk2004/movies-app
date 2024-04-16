import {Dispatch, SetStateAction, useEffect} from "react";
import {Movie} from "@/components/movie";
import axios from "axios";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";

export const UsePoster = (movie: Movie | null, setPoster: Dispatch<SetStateAction<string | null>>) => {
    const router = useRouter();

    const getPosterSync = async () => {
        if (movie) {
            await getPoster(movie.poster, setPoster, router);
        }
    }

    useEffect(() => {
        getPosterSync();
    }, [movie]);
}

const getPoster = async (fileName: string, setPoster: Dispatch<SetStateAction<string | null>>, router: AppRouterInstance) => {
    const jwt = Cookies.get("JWT");
    const url = `http://localhost:8080/files/posters/${fileName}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
            responseType: 'blob'
        });
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageURL = reader.result as string;
            setPoster(imageURL);
        };
        reader.readAsDataURL(response.data);
    } catch (error) {
        router.push("/");
        console.log(error);
    }
}