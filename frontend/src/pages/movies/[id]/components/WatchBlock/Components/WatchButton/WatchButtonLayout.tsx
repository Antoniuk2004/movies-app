import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/navigation";
import {movieSignal} from "@/signals/movie-signal";

const WatchButtonLayout = ({children}: LayoutProps) => {
    const router = useRouter();
    const {moviePath} = movieSignal.value;

    return (
        <button
            onClick={() => router.push("/movies/" + moviePath + "/watch")}
            className={"responsive:h-full bg-primary responsive:z-10 active:scale-95 duration-200 justify-center text-white rounded-md h-1/2 flex items-center cursor-pointer px-3 text-sm font-medium gap-x-2"}>
            {children}
        </button>
    )
}

export default WatchButtonLayout;