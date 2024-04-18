import {LayoutProps} from "@/types/LayoutProps";

const RatingLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex gap-y-2 items-end row-start-2 col-start-3 z-10 h-full flex-col">
            {children}
        </div>
    )
}

export default RatingLayout;