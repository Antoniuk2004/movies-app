import {LayoutProps} from "@/types/LayoutProps";

const DropdownLayout = ({children}: LayoutProps) => {
    return (
        <div className={"relative h-full"}>
            {children}
        </div>
    )
}

export default DropdownLayout;