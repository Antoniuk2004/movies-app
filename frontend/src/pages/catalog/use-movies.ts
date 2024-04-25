import {useEffect, useState} from "react";
import {Movie} from "@/types/Movie";
import {effect} from "@preact/signals-react";
import {catalogSignal} from "@/pages/catalog/catalog-signal";

export const useMovies = () => {
    const [movies, setMovies] = useState<null | Movie[]>(null);

    useEffect(() => {
        effect(() => {
           setMovies(catalogSignal.value);
        });
    }, []);

    return movies;
}