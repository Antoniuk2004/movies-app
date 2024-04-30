import {LayoutProps} from "@/types/LayoutProps";

const SocialMediaLayout = ({children} : LayoutProps) => {
    return (
        <div className={"flex text-3xl p-4 gap-x-8 w-full items-center justify-center"}>
            {children}
        </div>
    )
}

export default SocialMediaLayout;