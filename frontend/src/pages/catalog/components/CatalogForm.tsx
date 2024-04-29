import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {useRouter as useNavRouter} from "next/navigation";
import {useRouter as useInfoRouter} from "next/router";
import {onSubmit} from "@/pages/catalog/handlers";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";

const CatalogForm = ({children}: LayoutProps) => {
    const navRouter = useNavRouter();
    const infoRouter = useInfoRouter();

    const methods = useForm({
        defaultValues: infoRouter.query
    });
    const {handleSubmit} = methods;

    catalogParamsSignal.value = {
        ...catalogParamsSignal.value,
        ...infoRouter.query
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit((data) =>
                onSubmit(data, navRouter))}>
                <div
                    className={"grid responsive:mb-0 select-none grid-cols-catalog-full gap-x-4 my-4 movies-grid-xl:grid-cols-1 movies-grid-lg:grid-cols-1 movies-grid-md:grid-cols-1 movies-grid-sm:grid-cols-1 movies-grid-xl:mt-0 movies-grid-lg:mt-0 movies-grid-md:mt-0 movies-grid-sm:mt-0 movies-grid-xl:min-h-app-without-catalog-header movies-grid-lg:min-h-app-without-catalog-header movies-grid-md:min-h-app-without-catalog-header movies-grid-sm:min-h-app-without-catalog-header"}>
                    {children}
                </div>
            </form>
        </FormProvider>
    )
}

export default CatalogForm;