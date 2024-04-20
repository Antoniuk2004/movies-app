import {LayoutProps} from "@/types/LayoutProps";

const MediaBodyLayout = ({children}: LayoutProps) => {
    return (
        <div className={"h-full flex flex-col"}>
            {children}
        </div>
    )
}

export default MediaBodyLayout;