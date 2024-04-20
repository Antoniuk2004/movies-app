import {LayoutProps} from "@/types/LayoutProps";

const MediaInfoSmallLayout = ({children}: LayoutProps) => {
    return (
        <div className={"px-4 py-3.5 bg-gray-50 gap-x hidden responsive:grid grid-cols-5 gap-3"}>
            {children}
        </div>
    )
}

export default MediaInfoSmallLayout;