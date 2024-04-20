import {LayoutProps} from "@/types/LayoutProps";

const InfoSectionLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex flex-col text-center justify-center"}>
            {children}
        </div>
    )
}

export default InfoSectionLayout;