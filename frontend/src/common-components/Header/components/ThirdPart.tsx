import {LayoutProps} from "@/types/LayoutProps";

const ThirdPart = ({children}: LayoutProps) => {
    return (
        <div className="flex basis-1/3">
            {children}
        </div>
    )
}

export default ThirdPart;