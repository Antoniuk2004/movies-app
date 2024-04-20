import {LayoutProps} from "@/types/LayoutProps";

const MovieTitleLayout = ({children} : LayoutProps) => {
    return (
        <div className="responsive:col-start-1 responsive:text-center responsive:flex responsive:justify-center responsive:text-neutral-800 responsive:row-start-3 font-semibold select-text flex items-start mt-2 col-start-2 z-10 row-start-2 text-2xl text-white">
            {children}
        </div>
    )
}

export default MovieTitleLayout;