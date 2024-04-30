import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

type FooterLayoutProps = LayoutProps & {
    currentPage: string;
}

const FooterLayout = (props: FooterLayoutProps) => {
    const {children, currentPage} = props;

    return (
        <footer className={`bg-white text-neutral-400`}>
            <Wrapper>
                <div className={"p-4 min-h-52"}>
                    {children}
                </div>
            </Wrapper>
        </footer>
    )
}

export default FooterLayout;