import {LayoutProps} from "@/types/LayoutProps";

const ImageLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-11/12 flex justify-center"}>
            {children}
        </div>
    )
}

export default ImageLayout;