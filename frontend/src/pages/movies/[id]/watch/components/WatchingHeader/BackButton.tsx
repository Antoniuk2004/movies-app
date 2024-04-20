import {HiArrowSmLeft} from "react-icons/hi";
import {useRouter} from "next/navigation";
import {movieSignal} from "@/signals/movie-signal";

const BackButton = () => {
    const router = useRouter();
    const {movieId} = movieSignal.value;

    return (
        <button
            onClick={() => router.push("/movies/" + movieId)}
            className={"hover:bg-btn-hover active: duration-200 ease-in-out rounded-full size-8 text-xl flex items-center justify-center"}>
            <HiArrowSmLeft/>
        </button>
    )
}

export default BackButton;