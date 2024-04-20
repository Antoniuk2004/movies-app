import {LayoutProps} from "@/types/LayoutProps";

const IconLayout = ({children}: LayoutProps) => {
    return (
        <div className={"size-11 text-[28px] text-white flex items-center justify-center"}>
            {children}
        </div>
    )
}

export default IconLayout;