import {LayoutProps} from "@/types/LayoutProps";

const GenreElementLayout = ({children}: LayoutProps) => {
    return (
        <a className={"px-2 py-0.5 cursor-pointer border rounded-md duration-200 ease-out bg-genre-button hover:bg-genre-button-hover border-btn-light"}>
            {children}
        </a>
    )
}

export default GenreElementLayout;