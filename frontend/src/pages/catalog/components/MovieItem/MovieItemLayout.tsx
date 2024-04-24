import {LayoutProps} from "@/types/LayoutProps";

const MovieItemLayout = ({children}: LayoutProps) => {
    return (
        <div className={"p-2"}>
            {children}
        </div>
    )
}

export default MovieItemLayout;