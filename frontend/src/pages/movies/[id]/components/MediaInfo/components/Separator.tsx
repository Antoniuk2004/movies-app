import {LayoutProps} from "@/types/LayoutProps";

const Separator = ({children}: LayoutProps) => {
    return (
        <div className={"w-fit flex h-4 leading-4 text-base gap-x-1 font-['Roboto'] items-center"}>
            {children}
        </div>
    )
}

export default Separator;