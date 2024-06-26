import {LayoutProps} from "@/types/LayoutProps";

const DescriptionLayout = ({children}: LayoutProps) => {
    return (
        <div className={"px-4 py-3 select-text text-justify text-sm text-neutral-800 font-normal"}>
            {children}
        </div>
    )
}

export default DescriptionLayout;