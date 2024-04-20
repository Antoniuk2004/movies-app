import MediaInfoSmallLayout from "./MediaInfoSmallLayout";
import InfoSection from "@/pages/movies/[id]/components/MediaInfoSmall/components/InfoSection/InfoSection";
import {movieSignal} from "@/signals/movie-signal";
import {formatDuration} from "@/pages/movies/[id]/helpers";

const MediaInfoSmall = () => {
    return (
        <MediaInfoSmallLayout>
            <InfoSection title={"Year"} value={movieSignal.value.releaseYear}/>
            <InfoSection title={"Duration"} value={formatDuration(movieSignal.value.duration)}/>
            <InfoSection title={"Country"} value={movieSignal.value.originCountry}/>
            <InfoSection title={"MPAA"} value={movieSignal.value.mpaaRating}/>
            <InfoSection title={"Studio"} value={movieSignal.value.studio}/>
        </MediaInfoSmallLayout>
    )
}

export default MediaInfoSmall;