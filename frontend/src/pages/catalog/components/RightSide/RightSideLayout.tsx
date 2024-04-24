import {LayoutProps} from "@/types/LayoutProps";

const RightSideLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full h-catalog-filter sticky top-[4.5rem] bg-white rounded-lg"}>
            {children}
        </div>
    )
}

export default RightSideLayout;