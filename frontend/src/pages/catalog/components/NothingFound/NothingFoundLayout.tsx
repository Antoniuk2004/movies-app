import {LayoutProps} from "@/types/LayoutProps";

const NothingFoundLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center justify-center text-sm text-neutral-600 h-25"}>
            {children}
        </div>
    )
}

export default NothingFoundLayout;