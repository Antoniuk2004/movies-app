import {useParams, useRouter as useNavRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useRouter as useInfoRouter} from "next/router";
import {stringToTabSelection} from "@/pages/movies/[id]/helpers";
import {TabSelection} from "@/types/TabSelection";
import {MovieQuery} from "@/types/MovieQuery";

export const useMediaQuery = (): MovieQuery => {
    const [movieQuery, setMovieQuery] = useState<MovieQuery>({
        movieId: null,
        selectedValue: null,
        router: null,
    });

    const infoRouter = useInfoRouter();
    const navRouter = useNavRouter();
    const params = useParams();

    useEffect(() => {
        if (params && params.id) {
            const selection = stringToTabSelection(infoRouter.query.selection as string);
            if (!selection)
                navRouter.push(`/movies/${params.id}?selection=overview`,)
            setMovieQuery({
                movieId: parseInt(params.id as string),
                selectedValue: selection as TabSelection,
                router: navRouter,
            });
        }

    }, [params]);

    return movieQuery;
}