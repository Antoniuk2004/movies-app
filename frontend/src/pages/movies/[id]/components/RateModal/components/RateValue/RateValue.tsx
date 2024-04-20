import RateValueLayout from "./RateValueLayout";
import {getBackGroundColor} from "@/pages/movies/[id]/helpers";

type RateValueProps = {
    value: number;
}

const RateValue = (props: RateValueProps) => {
    const {value} = props;

    if(value === 0) return (
        <span>Apply rating</span>
    );

    return (
        <RateValueLayout backgroundColor={getBackGroundColor(value)}>
            <span>{value}</span>
        </RateValueLayout>
    )
}

export default RateValue;