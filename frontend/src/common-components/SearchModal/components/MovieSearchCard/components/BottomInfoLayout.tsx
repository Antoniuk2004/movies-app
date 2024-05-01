import {LayoutProps} from "@/types/LayoutProps";

const BottomInfoLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center text-neutral-600"}>
            {children}
        </div>
    )
}

export default BottomInfoLayout;