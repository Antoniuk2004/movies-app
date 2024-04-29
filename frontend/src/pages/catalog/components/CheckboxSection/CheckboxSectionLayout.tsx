import {LayoutProps} from "@/types/LayoutProps";

type CheckboxSectionProps = LayoutProps & {
    mobile: boolean;
}

const CheckboxSectionLayout = (props: CheckboxSectionProps) => {
    const {children, mobile} = props;

    return (
        <div className={`flex flex-col px-3 py-2 gap-y-2 ${mobile ? 'h-catalog-list-mobile' : 'h-catalog-list'} overflow-auto`}>
            {children}
        </div>
    )
}

export default CheckboxSectionLayout;