import {LayoutProps} from "@/types/LayoutProps";

const MovieTitleLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-sm font-semibold line-clamp-2 min-h-10 mt-1.5 max-w-[135px]"}>
            {children}
        </div>
    )
}

export default MovieTitleLayout;