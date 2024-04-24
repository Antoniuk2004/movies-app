import {LayoutProps} from "@/types/LayoutProps";

const DropdownLayout = ({children}: LayoutProps) => {
    return (
        <div className={"relative h-full w-full z-10"}>
            {children}
        </div>
    )
}

export default DropdownLayout;