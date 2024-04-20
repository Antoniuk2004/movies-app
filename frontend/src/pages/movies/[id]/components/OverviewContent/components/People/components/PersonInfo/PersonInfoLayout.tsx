import {LayoutProps} from "@/types/LayoutProps";

const PersonInfoLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-sm flex flex-col py-2"}>
            {children}
        </div>
    )
}

export default PersonInfoLayout;