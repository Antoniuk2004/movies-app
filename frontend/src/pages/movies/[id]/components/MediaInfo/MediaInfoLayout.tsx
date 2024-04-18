import {LayoutProps} from "@/types/LayoutProps";

const MediaInfoLayout = ({children}: LayoutProps) => {
    return (
        <div className={"row-start-5 h-fit bg-white rounded-md p-2"}>
            {children}
        </div>
    )
}

export default MediaInfoLayout;