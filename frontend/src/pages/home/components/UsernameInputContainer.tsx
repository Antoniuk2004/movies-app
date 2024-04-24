import {LayoutProps} from "@/types/LayoutProps";

export const UsernameInputContainer = ({children} : LayoutProps) => {
    return (
        <div className={"flex relative flex-col responsive:mb-4"}>
            {children}
        </div>
    )
}

export default UsernameInputContainer;