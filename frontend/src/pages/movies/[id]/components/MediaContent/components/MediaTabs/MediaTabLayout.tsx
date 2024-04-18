import {LayoutProps} from "@/types/LayoutProps";

const MediaTabLayout = ({children}: LayoutProps) => {
    return (
        <div className={"px-4 shadow-media-tabs text-base flex font-normal items-center gap-x-4 h-11"}>
            {children}
        </div>
    )
}

export default MediaTabLayout;