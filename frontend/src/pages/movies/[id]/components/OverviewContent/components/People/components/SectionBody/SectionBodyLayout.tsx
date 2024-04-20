import {LayoutProps} from "@/types/LayoutProps";

const SectionBodyLayout = ({children}: LayoutProps) => {
    return (
        <div className={"px-4 pb-1.5 pt-3"}>
            {children}
        </div>
    )
}

export default SectionBodyLayout;