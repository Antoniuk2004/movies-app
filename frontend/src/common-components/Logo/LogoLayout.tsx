import {LayoutProps} from "@/types/LayoutProps";

type LogoLayoutProps = LayoutProps & {
    action?: () => void;
};

const LogoLayout = (props: LogoLayoutProps) => {
    const {action, children} = props;

    return (
        <div
            onClick={action}
            className={`${action === undefined ? '' : 'cursor-pointer'} select-none flex text-neutral-800 items-center leading-[1px] w-fit h-fit gap-x-1 font-semibold text-2xl`}>
            {children}
        </div>
    )
}

export default LogoLayout;