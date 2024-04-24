import {LayoutProps} from "@/types/LayoutProps";

const ContentLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex justify-center text-center items-center flex-col"}>
                {children}
        </div>
    )
}

export default ContentLayout;