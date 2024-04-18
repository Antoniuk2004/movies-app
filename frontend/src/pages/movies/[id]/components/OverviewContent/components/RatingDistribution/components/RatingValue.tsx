import {LayoutProps} from "@/types/LayoutProps";

const RatingValue = ({children}: LayoutProps) => {
    return (
        <div className={"w-[35px] flex justify-between items-center"}>
            {children}
        </div>
    )
}

export default RatingValue;