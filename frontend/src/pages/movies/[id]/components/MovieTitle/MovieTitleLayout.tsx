import {LayoutProps} from "@/types/LayoutProps";

const MovieTitleLayout = ({children} : LayoutProps) => {
    return (
        <div className="font-semibold select-text flex items-start mt-2 col-start-2 z-10 row-start-2 text-2xl text-white">
            {children}
        </div>
    )
}

export default MovieTitleLayout;