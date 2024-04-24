import LoaderLayout from "@/common-components/Loader/LoaderLayout";

const Loader = () => {
    return (
        <LoaderLayout>
            <div className={"size-11 animate-spin bg-transparent border-4 border-transparent border-r-primary rounded-full"}>
            </div>
        </LoaderLayout>
    )
}

export default Loader;