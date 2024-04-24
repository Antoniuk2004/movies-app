import {LayoutProps} from "@/types/LayoutProps";

const BannerTextContent = ({children}: LayoutProps) => {
    return (
        <div className={"absolute z-20 w-full h-full flex flex-col items-center justify-center"}>
            <div className={"w-11/12"}>
                {children}
            </div>
        </div>
    )
}

export default BannerTextContent;