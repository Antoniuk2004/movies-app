import {LayoutProps} from "@/types/LayoutProps";

const MovieListLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-lg font-semibold bg-white rounded-lg py-3 px-4 wrapper:rounded-none"}>
            {children}
        </div>
    )
}

export default MovieListLayout;