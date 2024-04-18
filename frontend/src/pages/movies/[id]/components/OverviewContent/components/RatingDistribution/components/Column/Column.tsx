import ValueContainer
    from "@/pages/movies/[id]/components/OverviewContent/components/RatingDistribution/components/ValueContainer";
import {Key} from "react";

type ColumnProps = {
    values: string [] | number [];
    left: boolean;
    right: boolean;
    additionalValue?: string;
}

const Column = (props: ColumnProps) => {
    const {values, left, right, additionalValue} = props;

    return (
        <>
            {values.map((value: string | number, index: Key) => (
                <ValueContainer key={index} left={left} right={right}>
                    <span>{value}{additionalValue ? additionalValue : null}</span>
                </ValueContainer>
            ))}
        </>
    )
}

export default Column;