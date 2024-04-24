import MainPlayButtonLayout from "./MainPlayButtonLayout";
import {usePlayButton} from "@/pages/movies/[id]/watch/use-effects/use-play-button";
import MainPauseButtonLayout from "./MainPauseButtonLayout";
import MovieTimeButton
    from "@/pages/movies/[id]/watch/components/VideoPlayer/components/MoveTImeButton/MovieTimeButton";
import {useInactive} from "@/pages/movies/[id]/watch/use-effects/use-inactive";
import MainPlayButton from "@/pages/movies/[id]/watch/components/VideoPlayer/components/MainPlayButton";
import MainPauseButton from "@/pages/movies/[id]/watch/components/VideoPlayer/components/MainPauseButton";


const TopButtons = () => {
    const {isStopped} = usePlayButton();
    const {value} = useInactive();

    if (isStopped) {
        return (
            <MainPlayButtonLayout inactive={value}>
                <MovieTimeButton reversed={false}/>
                <MainPlayButton isStopped={isStopped}/>
                <MovieTimeButton reversed={true}/>
            </MainPlayButtonLayout>
        )
    } else return (
        <MainPauseButtonLayout inactive={value}>
            <MovieTimeButton reversed={false}/>
            <MainPauseButton/>
            <MovieTimeButton reversed={true}/>
        </MainPauseButtonLayout>
    )
}

export default TopButtons;