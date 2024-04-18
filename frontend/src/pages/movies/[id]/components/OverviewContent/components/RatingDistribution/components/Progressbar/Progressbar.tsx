import ProgressbarLayout from "./ProgressbarLayout";

type ProgressbarProps = {
    percentage: number;
}

const Progressbar = (props: ProgressbarProps) => {
    const {percentage} = props;

    return (
        <ProgressbarLayout>
            <div style={{width: `${percentage}%`}}
                 className={"bg-primary rounded-md h-full"}>
            </div>
        </ProgressbarLayout>
    )
}

export default Progressbar;