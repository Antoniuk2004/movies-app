import {LayoutProps} from "@/types/LayoutProps";
import {useInactive} from "@/pages/movies/[id]/watch/use-effects/use-inactive";
import {showControl} from "@/pages/movies/[id]/watch/helpers";

const ControlLayout = ({children}: LayoutProps) => {
    const {value} = useInactive();

    return (
        <div
            onClick={showControl}
            onMouseMove={showControl}
            className={`z-10 h-full w-full absolute transition-opacity duration-300 ease-in-out ${value ? 'opacity-0' : 'opacity-100'} responsive:bg-black-opacity-50`}
        >
            {children}
        </div>
    )
}

export default ControlLayout;