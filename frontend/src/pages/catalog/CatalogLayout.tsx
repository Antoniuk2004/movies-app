import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

const CatalogLayout = ({children}: LayoutProps) => {
    return (
        <Wrapper>
            <div className={"grid select-none grid-cols-catalog-full gap-x-4 my-4"}>
                {children}
            </div>
        </Wrapper>
    )
}

export default CatalogLayout;