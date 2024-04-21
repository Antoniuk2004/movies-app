import {LayoutProps} from "@/types/LayoutProps";
import IconLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/IconLayout";
import {toggleMute} from "@/pages/movies/[id]/watch/helpers";

const VolumeIconLayoutLayout = ({children}: LayoutProps) => {
    return (
        <IconLayout clickAction={toggleMute}>
            {children}
        </IconLayout>
    )
}

export default VolumeIconLayoutLayout;