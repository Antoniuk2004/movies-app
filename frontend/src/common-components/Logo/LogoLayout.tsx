import {LayoutProps} from "@/types/LayoutProps";

const LogoLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center leading-[1px] w-fit h-fit gap-x-1 text-2xl"}>
            {children}
        </div>
    )
}

export default LogoLayout;