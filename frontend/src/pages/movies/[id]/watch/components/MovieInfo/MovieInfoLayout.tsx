import {LayoutProps} from "@/types/LayoutProps";

const MovieInfoLayout = ({children}: LayoutProps) => {
    return (
        <div className={"bg-white w-full mb-4 wrapper:mb-0"}>
            {children}
        </div>
    )
}

export default MovieInfoLayout;