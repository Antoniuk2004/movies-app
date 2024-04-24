import {LayoutProps} from "@/types/LayoutProps";

const VideoTimeLayout = ({children}: LayoutProps) => {
    return (
        <div className={"font-['Roboto'] select-none gap-x-1 font-semibold text-sm text-white flex"}>
            {children}
        </div>
    )
}

export default VideoTimeLayout;