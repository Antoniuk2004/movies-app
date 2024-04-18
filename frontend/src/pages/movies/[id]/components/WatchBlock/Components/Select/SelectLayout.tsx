import {LayoutProps} from "@/types/LayoutProps";

const SelectLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full cursor-pointer justify-between text-sm text-primary rounded-md h-full items-center flex gap-x-3 bg-white border border-btn-light"}>
            {children}
        </div>
    )
}

export default SelectLayout;