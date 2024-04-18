import {LayoutProps} from "@/types/LayoutProps";

const PercentageValue = ({children}: LayoutProps) => {
    return (
        <div className={"font-semibold w-13.5"}>
            {children}
        </div>
    )
}

export default PercentageValue;