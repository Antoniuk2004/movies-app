import {LayoutProps} from "@/types/LayoutProps";

const MediaBodyLayout = ({children}: LayoutProps) => {
    return (
        <div className={"h-full flex flex-col gap-y-4 px-4 py-3"}>
            {children}
        </div>
    )
}

export default MediaBodyLayout;