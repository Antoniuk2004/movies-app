import {LayoutProps} from "@/types/LayoutProps";

const LeftSide = ({children}: LayoutProps) => {
    return (
        <div className={"flex font-normal gap-x-1.5 items-center"}>
            {children}
        </div>
    )
}

export default LeftSide;