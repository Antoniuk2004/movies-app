import {LayoutProps} from "@/types/LayoutProps";
import {handleTimeChangeButtonTouch} from "@/pages/movies/[id]/watch/handlers";

type MovieTimeButtonLayoutProps = LayoutProps & {
    reversed: boolean;
};

const MovieTimeButtonLayout = (props: MovieTimeButtonLayoutProps) => {
    const {reversed, children} = props;

    return (
        <div
            className={`${reversed ? 'flex-row-reverse' : ''} w-fit hidden mx-10 basis-1/3 relative text-white opacity-60 text-4xl responsive:flex`}>
            <div
                onTouchStart={() => handleTimeChangeButtonTouch(reversed)}
                className={"w-fit"}>
                {children}
            </div>
        </div>
    )
}

export default MovieTimeButtonLayout;