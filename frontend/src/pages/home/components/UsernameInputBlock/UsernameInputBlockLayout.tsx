import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {handleFormSubmit} from "@/pages/home/handlers";
import {useRouter} from "next/navigation";

const UsernameInputBlockLayout = ({children}: LayoutProps) => {
    const methods = useForm();
    const router = useRouter();

    const {
        handleSubmit,
    } = methods;

    const onSubmit = (data) => {
        handleFormSubmit(data, router);
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={"mt-5 text-2xl flex flex-col items-center responsive:text-lg text-center font-light"}>
                {children}
            </form>
        </FormProvider>
    )
}

export default UsernameInputBlockLayout;