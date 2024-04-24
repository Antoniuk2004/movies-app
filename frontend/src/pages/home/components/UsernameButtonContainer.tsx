import {LayoutProps} from "@/types/LayoutProps";

const UsernameButtonContainer = ({children}: LayoutProps) => {
    return (
        <div className={"flex mt-4 gap-x-2 responsive:items-center responsive:flex-col"}>
            {children}
        </div>
    )
}

export default UsernameButtonContainer;