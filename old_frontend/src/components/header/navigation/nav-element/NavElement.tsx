import {NavElemProps} from "@/components/header/navigation/nav-element/NavElemProps";
import {useRouter} from "next/navigation";

export const NavElement = (props: NavElemProps) => {
    const router = useRouter();

    return (
        <li
            onClick={() => router.push(props.path)}
            className="cursor-pointer text-xl w-[100px] py-3 font-semibold text-black text-opacity-80 flex flex-col items-center select-none bg-black bg-opacity-5 rounded-md">
            {props.icon}
            {props.name}
        </li>
    )
}