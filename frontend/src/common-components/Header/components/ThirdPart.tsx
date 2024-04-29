import {LayoutProps} from "@/types/LayoutProps";

type ThirdPartProps = LayoutProps & {
    justify: string;
}

const ThirdPart = (props: ThirdPartProps) => {
    const {children, justify} = props;

    return (
        <div className={`flex basis-1/3 gap-x-2 ${justify}`}>
            {children}
        </div>
    )
}

export default ThirdPart;