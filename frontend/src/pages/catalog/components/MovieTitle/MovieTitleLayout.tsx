import {LayoutProps} from "@/types/LayoutProps";

const MovieTitleLayout = ({children}: LayoutProps) => {
    return (
        <div className={"mt-1.5 text-sm font-semibold line-clamp-2 h-10 hover:text-primary duration-200 ease-in-out"}>
            {children}
        </div>
    )
}

export default MovieTitleLayout;