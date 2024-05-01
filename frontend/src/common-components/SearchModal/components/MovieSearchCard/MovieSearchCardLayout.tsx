import {LayoutProps} from "@/types/LayoutProps";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {handleMovieCardClick} from "@/common-components/SearchModal/handlers";

type MovieSearchCardLayoutProps = LayoutProps & {
    id: number;
    router: AppRouterInstance;
}

const MovieSearchCardLayout = (props: MovieSearchCardLayoutProps) => {
    const {children, router, id} = props;

    return (
        <div
            onClick={() => handleMovieCardClick(router, id)}
            className={"p-2 flex gap-x-3"}>
            {children}
        </div>
    )
}

export default MovieSearchCardLayout;