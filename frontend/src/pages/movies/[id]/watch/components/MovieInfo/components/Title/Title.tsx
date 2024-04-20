import TitleLayout from "./TitleLayout";
import {movieSignal} from "@/signals/movie-signal";

const Title = () => {
    const {title} = movieSignal.value;

    return (
        <TitleLayout>
            <span>{title}</span>
        </TitleLayout>
    )
}

export default Title;