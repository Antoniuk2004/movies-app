import {useFormContext} from "react-hook-form";
import {IoIosCloseCircleOutline} from "react-icons/io";

const InvalidInput = () => {
    const {formState: {errors}} = useFormContext();

    if(!errors.username?.message) return null;
    return (
        <div className={"responsive:static absolute top-full items-center mt-1.5 z-20 text-base flex gap-x-1 text-red-500 "}>
            <IoIosCloseCircleOutline />
            <span>{errors.username?.message as string}</span>
        </div>
    )
}

export default InvalidInput;