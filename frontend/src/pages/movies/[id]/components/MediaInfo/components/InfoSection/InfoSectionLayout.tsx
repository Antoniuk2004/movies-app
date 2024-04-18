import {LayoutProps} from "@/types/LayoutProps";

type InfoSectionLayoutProps = LayoutProps & {
    cursorPointer?: boolean;
};

const InfoSectionLayout = (props: InfoSectionLayoutProps) => {
    const {children, cursorPointer} = props;

    return (
        <div className={`
        ${cursorPointer === false ? 'cursor-auto' : 'cursor-pointer'}
        px-2.5 py-1.5 mb-0.5 rounded-md d hover:bg-hover-light duration-200`}>
            {children}
        </div>
    )
}

export default InfoSectionLayout;