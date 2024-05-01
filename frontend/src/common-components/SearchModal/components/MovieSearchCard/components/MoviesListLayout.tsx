import {LayoutProps} from "@/types/LayoutProps";

const MovieListLayout = ({children}: LayoutProps) => {
    return (
        <div className={"px-2 flex flex-col gap-y-2 py-1"}>
            {children}
        </div>
    )
}

export default MovieListLayout;