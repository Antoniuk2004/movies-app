import {LayoutProps} from "@/types/LayoutProps";

const Title = ({children}: LayoutProps) => {
    return (
        <div className={"text-sm font-light text-neutral-600"}>
            {children}
        </div>
    )
}

export default Title;