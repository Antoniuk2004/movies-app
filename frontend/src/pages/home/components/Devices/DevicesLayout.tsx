import {LayoutProps} from "@/types/LayoutProps";

const DevicesLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full border-t-8"}>
            {children}
        </div>
    )
}

export default DevicesLayout;