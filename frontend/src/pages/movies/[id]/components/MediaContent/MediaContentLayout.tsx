import {LayoutProps} from "@/types/LayoutProps";

const MediaContentLayout = ({children}: LayoutProps) => {
    return (
        <div className={"bg-white row-start-3 row-end-6 rounded-md col-start-2 col-end-4"}>
            {children}
        </div>
    )
}

export default MediaContentLayout;