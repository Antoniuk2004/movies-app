import {LayoutProps} from "@/types/LayoutProps";
import {useWindowScroll} from "@mantine/hooks";

const MoviesHeaderLayout = ({children}: LayoutProps) => {
    const [scroll] = useWindowScroll();

    return (
        <div
            className={`hidden w-full fixed ${scroll.y > 0 ? 'bg-header shadow-header-shadow' : 'bg-transparent'} top-0  z-30 px-1.5 h-12 responsive:flex items-center duration-200 ease-in-out`}>
            {children}
        </div>
    )
}

export default MoviesHeaderLayout;