import {LayoutProps} from "@/types/LayoutProps";
import {handleTabSelection} from "@/pages/movies/[id]/handlers";
import {TabSelection} from "@/types/TabSelection";
import {movieQuerySignal} from "@/pages/movies/[id]/movie-query-signal";

type TabLayoutProps = LayoutProps & {
    value: TabSelection
}

const TabLayout = (props: TabLayoutProps) => {
    const {children, value} = props;
    const {selectedValue} = movieQuerySignal.value;

    return (
        <div
            onClick={() => handleTabSelection(value)}
            className={`relative ${value === selectedValue ? 'text-neutral-800' : 'text-gray-500'} 
            cursor-pointer h-full flex items-center`}>
            {children}
        </div>
    )
}

export default TabLayout;