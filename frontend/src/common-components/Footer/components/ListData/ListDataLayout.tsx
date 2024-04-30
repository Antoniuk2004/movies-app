import {LayoutProps} from "@/types/LayoutProps";

const ListDataLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex justify-center text-lg w-full p-4 "}>
            <ul className={"flex gap-x-4 border-b border-b-neutral-400 px-8"}>
                {children}
            </ul>
        </div>
    )
}

export default ListDataLayout;