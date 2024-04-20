import RateDisplayLayout from "./RateDisplayLayout";
import RateValue from "@/pages/movies/[id]/components/RateModal/components/RateValue/RateValue";

type RateDisplayProps = {
    value: number;
}

const RateDisplay = (props: RateDisplayProps) => {
    const {value} = props;

    return (
        <RateDisplayLayout>
            <RateValue value={value}/>
        </RateDisplayLayout>
    )
}

export default RateDisplay;