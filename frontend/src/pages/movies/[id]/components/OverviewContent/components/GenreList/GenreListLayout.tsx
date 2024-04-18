import {LayoutProps} from "@/types/LayoutProps";

const GenreListLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex gap-2 text-base font-normal flex-wrap"}>
            {children}
        </div>
    )
}

export default GenreListLayout;