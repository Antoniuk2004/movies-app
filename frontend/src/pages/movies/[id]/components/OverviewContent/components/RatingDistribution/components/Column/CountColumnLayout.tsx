import {LayoutProps} from "@/types/LayoutProps";

const CountColumnLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-sm font-normal text-neutral-600 font-['Roboto']"}>
            {children}
        </div>
    )
}

export default CountColumnLayout;