import {LayoutProps} from "@/types/LayoutProps";

const ModalSearchbarLayout = ({children}: LayoutProps) => {
    return (
        <div className={"h-12 border-b border-b-btn-light flex items-center px-4 text-sm text-neutral-600 w-full"}>
            {children}
        </div>
    )
}

export default ModalSearchbarLayout;