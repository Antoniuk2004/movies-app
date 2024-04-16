import {UseMovies} from "@/pages/home/movies-list/use-effects/UseMovies";
import {useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {Movie} from "@/components/movie";
import {UseJWT} from "@/pages/home/movies-list/use-effects/UseJWT";
import {calcDuration, getPoster} from "@/pages/home/movies-list/helpers";
import Image from 'next/image';
import {UsePoster} from "@/pages/home/movies-list/use-effects/UsePoster";
import {PostersMap} from "@/pages/home/movies-list/PostersMap";

const MoviesList = () => {
    const [movies, setMovies] = useState<Array<Movie>>([]);
    const jwtRef = useRef('');
    const router = useRouter();
    const [posters, setPosters] = useState<PostersMap>({});

    UseMovies(setMovies, router);
    UseJWT(jwtRef);
    UsePoster(movies, jwtRef.current, setPosters);

    if (posters == null || movies == null) return null;

    return (
        <div className="overflow-x-auto relative">
            <button className="absolute left-0 top-1/2 z-10">Left</button>
            <div className="flexgap-x-4 w-fit flex flex-row gap-x-4">
                {movies.map(
                    (movie, index) => (
                        <div
                            onClick={() => router.push(`/movies/${movie.movieId}`)}
                            style={{backgroundImage: `url("${posters[movie.movieId]}")`}}
                            className="card cursor-pointer relative 2xl:w-[300px] 2xl:h-[400px] xl:w-[240px] xl:h-[320px] lg:w-[192px] lg:h-[256px] md:w-[192px] md:h-[256px] w-[153.6px] h-[204.8px]  rounded-xl bg-center bg-cover"
                            key={index}>
                            <div
                                className="info absolute w-full flex flex-col bottom-0 left-0 p-5 h-[35%] text-white bg-black bg-opacity-50 rounded-t-none backdrop-blur-md rounded-xl">
                                <div className="top h-1/2 font-semibold">
                                    <span>{movie.title}</span>
                                    <span>{` (${movie.releaseYear})`}</span>
                                </div>
                                <div className="bottom h-1/2 flex items-end place-content-between w-full">
                                    <span className="bg-white bg-opacity-10 py-2 px-4 rounded-full">Action</span>
                                    <span className="py-2 font-semibold">{calcDuration(movie.duration)}</span>
                                </div>
                            </div>
                        </div>
                    )
                )}
                <button>Right</button>
            </div>
        </div>

    )
}

export default MoviesList