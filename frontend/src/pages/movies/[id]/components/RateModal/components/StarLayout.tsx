import {LayoutProps} from "@/types/LayoutProps";
import {setTempRating} from "@/pages/movies/[id]/components/RateModal/helpers";

type StarLayoutProps = LayoutProps & {
    makeOrange: boolean;
    value: number;
}

const StarLayout = (props: StarLayoutProps) => {
    const {children, makeOrange, value} = props;

    return (
        <div
            className={"px-1.5 text-gray-500 flex justify-center text-rate-modal-start too-small:px-0.5 w-full too-small:text-xl"}>
            <div
                onClick={() => setTempRating(value + 1)}
                className={`${makeOrange ? 'text-yellow-400' : ''} w-fit h-fit cursor-pointer`}>
                {children}
            </div>
        </div>
    )
}

export default StarLayout;