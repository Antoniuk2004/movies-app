import {LayoutProps} from "@/types/LayoutProps";

const CheckItemLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center gap-x-2 text-sm font-normal"}>
            {children}
        </div>
    )
}

export default CheckItemLayout;