import {useParams, useRouter} from "next/navigation";
import {useState} from "react";
import {UseId} from "@/pages/movies/[id]/use-effects/UseId";
import {wrapper} from "@/components/wrapper";
import {FaChevronLeft} from "react-icons/fa6";
import Image from "next/image"
import {UseMovie} from "@/pages/movies/[id]/use-effects/UseMovie";
import {UsePoster} from "@/pages/movies/[id]/use-effects/UsePoster";
import {Movie} from "@/components/movie";
import {calcDuration} from "@/pages/home/movies-list/helpers";

const MoviePage = () => {
    const params = useParams();
    const [id, setId] = useState<number | null>(null);
    const [movie, setMovie] = useState<Movie | null>(null);
    const [poster, setPoster] = useState<string | null>(null);
    const router = useRouter();

    UseId(params, setId);
    UseMovie(id, setMovie);
    UsePoster(movie, setPoster);

    if (poster !== null && movie !== null)
        return (
            <div className={`movie-page ${wrapper}`}>
                <div
                    onClick={() => router.push("/movies")}
                    className="flex cursor-pointer items-center gap-x-2 mb-4 capitalize opacity-80">
                    <FaChevronLeft className="text-2xl"/>
                    <p className="cursor-pointer text-3xl">Movies</p>
                </div>
                <div className="movie-info flex mt-7">
                    <Image
                        className="rounded-xl w-[250px] h-[375px]x mr-7 shadow-md"
                        src={poster}
                        alt={movie.title}
                        width={100}
                        height={100}/>
                    <div className="right-side relative">
                        <div className="flex pt-7 h-fit items-center gap-x-5">
                            <div className="title">
                                <span className="text-3xl opacity-80 font-medium">{movie.title}</span>
                            </div>
                            <div className="year-duration opacity-80 text-xl flex gap-x-3 whitespace-nowrap">
                                <span>{movie.releaseYear}</span>
                                <span>&bull;</span>
                                <span>{calcDuration(movie.duration)}</span>
                            </div>
                        </div>
                        <div className="genres my-4">
                            <span className="px-4 py-2 rounded-full border-2 border-black opacity-80">Action</span>
                        </div>
                        <div className="descripntion text-lg my-10 opacity-80 text-justify">
                            <span>{movie.description}</span>
                        </div>
                        <div className="play-button-container absolute bottom-0 mb-7">
                            <button className="px-10 border-2 border-playButtonBorder py-2 text-lg bg-playButton text-white capitalize rounded-full">play movie</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    else return null;
}

export default MoviePage