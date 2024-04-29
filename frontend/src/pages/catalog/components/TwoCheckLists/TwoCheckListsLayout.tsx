import {LayoutProps} from "@/types/LayoutProps";

const TwoCheckListsLayout = ({children}: LayoutProps) => {
    return (
        <div className={"py-2 px-3 text-sm font-semibold flex flex-col gap-y-2"}>
            {children}
        </div>
    )
}

export default TwoCheckListsLayout;