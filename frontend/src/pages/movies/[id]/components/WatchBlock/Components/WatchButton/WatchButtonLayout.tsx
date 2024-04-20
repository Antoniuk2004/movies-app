import {LayoutProps} from "@/types/LayoutProps";

const WatchButtonLayout = ({children}: LayoutProps) => {
    return (
        <div className={"responsive:h-full bg-primary responsive:z-10 active:scale-95 duration-200 justify-center text-white rounded-md h-1/2 flex items-center cursor-pointer px-3 text-sm font-medium gap-x-2"}>
            {children}
        </div>
    )
}

export default WatchButtonLayout;