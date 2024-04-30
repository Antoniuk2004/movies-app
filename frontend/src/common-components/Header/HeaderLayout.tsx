import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

type HeaderLayoutProps = LayoutProps & {
    currentPage: string;
}

const HeaderLayout = (props: HeaderLayoutProps) => {
    const {currentPage, children} = props;

    return (
        <header
            className={`${currentPage === '/catalog' ? 'movies-grid-xl:hidden movies-grid-lg:hidden movies-grid-md:hidden movies-grid-sm:hidden' : 'responsive:absolute responsive:hidden'} w-full h-14 bg-header  z-30 sticky top-0 shadow-header-shadow`}>
            <Wrapper>
                <div className="flex px-5 h-full w-full items-center">
                    {children}
                </div>
            </Wrapper>
        </header>
    )
}

export default HeaderLayout;