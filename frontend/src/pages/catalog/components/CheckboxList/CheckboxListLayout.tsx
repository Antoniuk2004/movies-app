import {LayoutProps} from "@/types/LayoutProps";

type CheckboxListLayoutProps = LayoutProps & {
    mobile: boolean;
}

const CheckboxListLayout = (props: CheckboxListLayoutProps) => {
    const {children, mobile} = props;

    return (
        <div
            className={`absolute top-0 ${mobile ? 'left-[440px]' : 'left-[330px]'} justify-start w-full flex flex-col text-sm`}>
            {children}
        </div>
    )
}

export default CheckboxListLayout;