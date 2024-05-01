import {LayoutProps} from "@/types/LayoutProps";

const MovieCardInfoLayout = ({children}: LayoutProps) => {
    return (
        <div className={"py-2 text-sm"}>
            {children}
        </div>
    )
}

export default MovieCardInfoLayout;