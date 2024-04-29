import {useFormContext} from "react-hook-form";

type InputElementProps = {
    placeholder: string;
    id: string;
}

const InputElement = (props: InputElementProps) => {
    const {placeholder, id} = props;
    const {register} = useFormContext();

    return (
        <input
            {...register(id, {valueAsNumber: true})}
            className={"w-full font-['Roboto'] py-1 px-2 ring-1 ring-btn-light text-sm focus:outline-0 rounded-md font-normal focus:ring-primary duration-200 ease-in-out"}
            placeholder={placeholder}
            type="number"/>
    )
}

export default InputElement;