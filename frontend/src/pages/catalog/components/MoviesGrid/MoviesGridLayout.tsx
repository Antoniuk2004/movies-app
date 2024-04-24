import {LayoutProps} from "@/types/LayoutProps";

const MoviesGridLayout = ({children}: LayoutProps) => {
    return (
        <div className={"px-2 grid grid-cols-5 movies-grid-xl:grid-cols-6 movies-grid-lg:grid-cols-5 movies-grid-md:grid-cols-4 movies-grid-sm:grid-cols-3"}>
            {children}
        </div>
    )
}

export default MoviesGridLayout;