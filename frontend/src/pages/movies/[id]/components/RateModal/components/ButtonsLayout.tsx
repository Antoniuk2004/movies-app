import {LayoutProps} from "@/types/LayoutProps";

const ButtonsLayout = ({children}: LayoutProps) => {
    return (
        <div className={"px-3 pb-4 gap-x-3 grid grid-cols-2"}>
            {children}
        </div>
    )
}

export default ButtonsLayout;