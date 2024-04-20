import {LayoutProps} from "@/types/LayoutProps";

type RateValueLayoutProps = LayoutProps & {
    backgroundColor: string;
}

const RateValueLayout = (props: RateValueLayoutProps) => {
    const {children, backgroundColor} = props;

    return (
        <div
            className={`w-full h-full text-white text-2xl flex items-center justify-center ${backgroundColor}`}>
            <div className={"size-11 font-['Roboto'] border-2 border-white bg-transparent flex items-center justify-center rounded-full"}>
                {children}
            </div>
        </div>
    )
}

export default RateValueLayout;