import {LayoutProps} from "@/types/LayoutProps";

const FromToInputLayout = ({children}: LayoutProps) => {
    return (
        <div className={"px-3 py-2 text-sm flex flex-col gap-y-2 font-semibold"}>
            {children}
        </div>
    )
}

export default FromToInputLayout;