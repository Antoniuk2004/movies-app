import {LayoutProps} from "@/types/LayoutProps";

const UsernameInputLayout = ({children}: LayoutProps) => {
    return (
        <div className={"h-14 text-base flex items-center"}>
            {children}
        </div>
    )
}

export default UsernameInputLayout;