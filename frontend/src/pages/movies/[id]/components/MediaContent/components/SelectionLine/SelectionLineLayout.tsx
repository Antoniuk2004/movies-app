import {LayoutProps} from "@/types/LayoutProps";

const SelectionLineLayout = ({children}: LayoutProps) => {
    return (
        <div className={"absolute h-full w-full flex items-end"}>
            {children}
        </div>
    )
}

export default SelectionLineLayout;