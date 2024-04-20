import {LayoutProps} from "@/types/LayoutProps";

const CommentsContentLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex mt-8 items-center justify-center flex-grow"}>
            {children}
        </div>
    )
}

export default CommentsContentLayout;