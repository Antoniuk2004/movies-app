import {LayoutProps} from "@/types/LayoutProps";

const RatingRowListLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex flex-col w-full"}>
            {children}
        </div>
    )
}

export default RatingRowListLayout;