import {LayoutProps} from "@/types/LayoutProps";

const SloganHeaderLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-5xl responsive:text-3xl font-black responsive:font-bold"}>
            {children}
        </div>
    )
}

export default SloganHeaderLayout;