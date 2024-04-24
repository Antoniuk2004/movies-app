import IndicatorLayout from "./IndicatorLayout";

type IndicatorProps = {
    value: string | number;
    isShown: boolean;
    leftOffset: number;
    mb: string;
}

const Indicator = (props: IndicatorProps) => {
    const {isShown, value, leftOffset, mb} = props;

    if(!isShown) return null;
    return (
        <IndicatorLayout mb={mb} leftOffset={leftOffset}>
            {value}
        </IndicatorLayout>
    )
}

export default Indicator;