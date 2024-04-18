import MediaInfoLayout from "./MediaInfoLayout";
import InfoSection from "@/pages/movies/[id]/components/MediaInfo/components/InfoSection/InfoSection";
import {movieSignal} from "@/signals/movie-signal";
import {formatDuration} from "@/pages/movies/[id]/helpers";

const MediaInfo = () => {
    return (
        <MediaInfoLayout>
            <InfoSection title={'Release Year'} value={movieSignal.value.releaseYear}/>
            <InfoSection
                title={'Duration'}
                cursorPointer={false}
                value={formatDuration(movieSignal.value.duration)}/>
            <InfoSection title={'Origin Country'} value={movieSignal.value.originCountry}/>
            <InfoSection title={'MPAA rating'} value={movieSignal.value.mpaaRating}/>
            <InfoSection title={'Studio'} value={movieSignal.value.studio}/>
        </MediaInfoLayout>
    )
}

export default MediaInfo;