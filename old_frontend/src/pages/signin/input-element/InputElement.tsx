import {handleInput} from "@/pages/signin/handlers";
import {InputProps} from "@/pages/signin/input-element/InputProps";

const InputElement = (props: InputProps) => {
    return (
        <input
            autoComplete={'off'}
            className="border-2 placeholder:select-none focus:border-primaryColor focus:outline-none rounded-md p-2 my-2 placeholder:capitalize"
            placeholder={props.placeholder}
            id={props.placeholder}
            value={props.placeholder === 'username' ? props.fields.username : props.fields.password} type="text"
            onChange={(e) => handleInput(e, props.setFields)}/>
    )
}

export default InputElement