import {LayoutProps} from "@/types/LayoutProps";

type ProgressbarLayoutProps = LayoutProps & {
    bgColor?: string;
    mx?: string;
}

const ProgressbarLayout = (props: ProgressbarLayoutProps) => {
    const {bgColor, children, mx} = props;

    return (
        <div className={`
        ${mx === undefined ? 'mx-1.5' : mx}
        ${bgColor ? bgColor : "bg-gray-200"}
        rounded-md w-full h-1.5`}>
            {children}
        </div>
    )
}

export default ProgressbarLayout;