import {LayoutProps} from "@/types/LayoutProps";

const RatingRowLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-sm min-h-7 flex items-center font-['Roboto']"}>
            {children}
        </div>
    )
}

export default RatingRowLayout;