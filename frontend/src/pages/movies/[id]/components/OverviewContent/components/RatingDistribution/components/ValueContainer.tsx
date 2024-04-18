import {LayoutProps} from "@/types/LayoutProps";

type ValueContainerProps = LayoutProps & {
    left?: boolean;
    right?: boolean;
}

const ValueContainer = (props: ValueContainerProps) => {
    const {left, right, children} = props;

    return (
        <div className={`${left ? 'pl-1.5' : ''} ${right ? 'pr-1.5' : ''} py-1 whitespace-nowrap`}>
            {children}
        </div>
    )
}

export default ValueContainer;