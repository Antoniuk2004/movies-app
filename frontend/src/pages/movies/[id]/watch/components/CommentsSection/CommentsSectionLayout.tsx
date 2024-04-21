import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

const CommentsSectionLayout = ({children}: LayoutProps) => {
    return (
        <div className={"bg-white mt-52 text-center w-full h-full min-h-72 flex-grow"}>
            <Wrapper>
                <div className="flex flex-col">
                    {children}
                </div>
            </Wrapper>
        </div>
    )
}

export default CommentsSectionLayout;