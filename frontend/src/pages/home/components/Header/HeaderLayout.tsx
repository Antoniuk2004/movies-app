import {LayoutProps} from "@/types/LayoutProps";

const HeaderLayout = ({children}: LayoutProps) => {
    return (
        <div className={"absolute select-none px-6 z-30 items-center top-0 left-0 w-full  text-3xl h-24 "}>
            {children}
        </div>
    )
}

export default HeaderLayout;