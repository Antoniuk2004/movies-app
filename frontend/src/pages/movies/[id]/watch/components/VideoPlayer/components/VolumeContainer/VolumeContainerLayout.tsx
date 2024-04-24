import {LayoutProps} from "@/types/LayoutProps";

const VolumeContainerLayout = ({children}: LayoutProps) => {
    return (
        <div
            className={"flex responsive:hidden items-center w-36 gap-x-2 mr-2"}>
            {children}
        </div>
    )
}

export default VolumeContainerLayout;