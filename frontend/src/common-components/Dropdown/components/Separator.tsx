type SeparatorProps = {
    additionalClasses?: string[];
}

const Separator = (props: SeparatorProps) => {
    const {additionalClasses} = props;

    if(!additionalClasses) return null;
    return (
        <div className={"w-full h-2 flex items-center"}>
            <div className={"w-full border-t border-neutral-200"}></div>
        </div>
    )
}

export default Separator;