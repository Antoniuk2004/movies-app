import {LayoutProps} from "@/types/LayoutProps";

const MovieCoverLayout = ({children}: LayoutProps) => {
    return (
        <div className={"mr-3"}>
            {children}
        </div>
    )
}

export default MovieCoverLayout;