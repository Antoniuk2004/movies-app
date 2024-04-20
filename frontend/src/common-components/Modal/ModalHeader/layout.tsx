import {LayoutProps} from "@/types/LayoutProps";

const ModalHeaderLayout = ({children} : LayoutProps) => {
    return (
        <div className="font-semibold px-5 py-3.5 flex justify-between">
            {children}
        </div>
    )
}

export default ModalHeaderLayout;