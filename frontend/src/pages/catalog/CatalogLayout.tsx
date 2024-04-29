import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";
import CatalogForm from "@/pages/catalog/components/CatalogForm";

const CatalogLayout = ({children}: LayoutProps) => {
    return (
        <Wrapper>
            <CatalogForm>
                {children}
            </CatalogForm>
        </Wrapper>
    )
}

export default CatalogLayout;