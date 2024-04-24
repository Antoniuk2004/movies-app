import {LayoutProps} from "@/types/LayoutProps";

const SortingSelectLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex w-full cursor-pointer text bg-transparent rounded-md ring-1 ring-btn-light text-sm h-full items-center justify-between gap-x-1.5 px-2.5"}>
            {children}
        </div>
    )
}

export default SortingSelectLayout;