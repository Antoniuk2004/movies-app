import {LayoutProps} from "@/types/LayoutProps";

const DescriptionLayout = ({children}: LayoutProps) => {
    return (
        <div className={"select-text text-justify text-base text-neutral-800 font-normal"}>
            {children}
        </div>
    )
}

export default DescriptionLayout;