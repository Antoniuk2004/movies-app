import {LayoutProps} from "@/types/LayoutProps";

const DevicesContainer = ({children}: LayoutProps) => {
    return (
        <div className={"flex text-center items-center justify-center select-none py-20 w-full wrapper:flex-col responsive:flex-col"}>
            {children}
        </div>
    )
}

export default DevicesContainer;