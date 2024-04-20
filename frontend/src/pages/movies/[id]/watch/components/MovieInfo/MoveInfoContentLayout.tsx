import {LayoutProps} from "@/types/LayoutProps";

const MoveInfoContentLayout = ({children}: LayoutProps) => {
    return (
        <div className={"py-3 w-full bg-white px-4 flex justify-between items-center"}>
            {children}
        </div>
    )
}

export default MoveInfoContentLayout;