import { TbReload } from "react-icons/tb";
import MovieTimeButtonLayout from "./MovieTimeButtonLayout";

type MovieTimeButtonProps = {
    reversed: boolean;
}

const MovieTimeButton = (props: MovieTimeButtonProps) => {
    const {reversed} = props;

    return (
        <MovieTimeButtonLayout reversed={reversed}>
            <span className={"text-sm absolute -top-4"}>{reversed ? '+10' : '-10'}</span>
            <TbReload style={{ transform: `${reversed ? '' : 'rotateY(180deg)'}` }} />
        </MovieTimeButtonLayout>
    )
}

export default MovieTimeButton;