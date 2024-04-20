import {LayoutProps} from "@/types/LayoutProps";

const VolumeContainerLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center"}>
            {children}
        </div>
    )
}

export default VolumeContainerLayout;