import {LayoutProps} from "@/types/LayoutProps";

const RateDisplayLayout = ({children}: LayoutProps) => {
    return (
        <div className={"h-16 text-xs text-gray-400 bg-gray-200 w-125 responsive:w-responsive-modal flex items-center justify-center"}>
            {children}
        </div>
    )
}

export default RateDisplayLayout;