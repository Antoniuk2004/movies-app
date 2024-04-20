import CoverLayout from "@/pages/movies/[id]/components/Cover/CoverLayout";
import Image from "next/image";
import Overlay from "@/pages/movies/[id]/components/Cover/Overlay";
import {movieSignal} from "@/signals/movie-signal";

const Cover = () => {
    const coverSrc = movieSignal.value.cover;

    return (
        <CoverLayout>
            {coverSrc ? <Overlay/> : null}
            <Image
                className={"w-[260px] h-[360px] object-cover object-center"}
                loading={"lazy"}
                width={260}
                height={360}
                alt={"cover"}
                src={coverSrc ? coverSrc : '/images/no-image.jpg'}
            />
        </CoverLayout>
    );
};

export default Cover;
