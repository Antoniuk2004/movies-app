import {LayoutProps} from "@/types/LayoutProps";

const MediaContentLayout = ({children}: LayoutProps) => {
    return (
        <div className={"bg-white responsive:h-fit responsive:rounded-t-2xl responsive:rounded-b-none responsive:row-start-5 responsive:col-start-1 responsive:col-end-1 row-start-3 row-end-6 rounded-md col-start-2 col-end-4"}>
            {children}
        </div>
    )
}

export default MediaContentLayout;