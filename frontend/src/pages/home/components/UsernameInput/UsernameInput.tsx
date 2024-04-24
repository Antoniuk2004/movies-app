import UsernameInputLayout from "./UsernameInputLayout";
import {useFormContext} from "react-hook-form";

const UsernameInput = () => {
    const {register} = useFormContext();

    return (
        <UsernameInputLayout>
            <input
                autoComplete={"off"}
                {...register("username", {required: "Username is required"})}
                className={"bg-transparent font- font-['Poppins'] ring-1 ring-neutral-800 text-base duration-200 ease-in-out rounded-md px-4 h-full focus:ring-2 focus:ring-primary focus:outline-0"} type="text" placeholder="Username"/>
        </UsernameInputLayout>
    )
}

export default UsernameInput;