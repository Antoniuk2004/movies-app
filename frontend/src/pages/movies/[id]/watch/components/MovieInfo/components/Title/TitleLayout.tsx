import {LayoutProps} from "@/types/LayoutProps";
import {movieSignal} from "@/signals/movie-signal";
import {useRouter} from "next/navigation";

const TitleLayout = ({children}: LayoutProps) => {
    const {movieId} = movieSignal.value;
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(`/movies/${movieId}`)}
            className={"cursor-pointer w-fit h-fit text-xl hover:underline duration-200 ease-in-out"}>
            {children}
        </button>
    )
}

export default TitleLayout;