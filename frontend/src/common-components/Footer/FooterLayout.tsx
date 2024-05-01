import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

const FooterLayout = ({children} : LayoutProps) => {
    return (
        <footer className={`bg-white text-neutral-400`}>
            <Wrapper>
                <div className={"p-4 min-h-52 responsive:min-h-64"}>
                    {children}
                </div>
            </Wrapper>
        </footer>
    )
}

export default FooterLayout;