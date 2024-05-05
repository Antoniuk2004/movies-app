import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

type CommentsSectionLayoutProps = LayoutProps & {
    isMobile: boolean;
}

const CommentsSectionLayout = (props: CommentsSectionLayoutProps) => {
    const {isMobile, children} = props;

    return (
        <div className={`${isMobile ? 'responsive:hidden' : 'mt-52 desktop-screen:hidden'} bg-white text-center w-full h-full min-h-72 flex-grow`}>
            <Wrapper>
                <div className="flex flex-col">
                    {children}
                </div>
            </Wrapper>
        </div>
    )
}

export default CommentsSectionLayout;