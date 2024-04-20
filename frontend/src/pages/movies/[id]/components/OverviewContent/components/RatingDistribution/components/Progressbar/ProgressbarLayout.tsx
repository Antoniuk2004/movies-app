import {LayoutProps} from "@/types/LayoutProps";

type ProgressbarLayoutProps = LayoutProps & {
    bgColor?: string;
}

const ProgressbarLayout = (props: ProgressbarLayoutProps) => {
    const {bgColor, children} = props;

    return (
        <div className={`
        ${bgColor ? bgColor : "bg-gray-200"}
        rounded-md w-full h-1.5 mx-1.5`}>
            {children}
        </div>
    )
}

export default ProgressbarLayout;