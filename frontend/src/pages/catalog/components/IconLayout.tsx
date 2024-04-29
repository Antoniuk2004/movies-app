import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/navigation";

const IconLayout = ({children}: LayoutProps) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push("/main")}
            className={"flex size-8 justify-center items-center text-sm"}>
            {children}
        </div>
    )
}

export default IconLayout;