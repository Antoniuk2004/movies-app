import {LayoutProps} from "@/types/LayoutProps";

const ApplyButtonLayout = ({children}: LayoutProps) => {
    return (
        <button
            type={"submit"}
            className={"rounded-md text-white text-sm bg-primary py-1 active:scale-95"}>
            {children}
        </button>
    )
}

export default ApplyButtonLayout;