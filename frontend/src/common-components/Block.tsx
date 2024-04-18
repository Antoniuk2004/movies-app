import {LayoutProps} from "@/types/LayoutProps";

type BlockProps = LayoutProps & {
    height?: string;
    flex?: boolean;
}

const Block = (props: BlockProps) => {
    const {flex, children, height} = props;

    return (
        <div className={`${height ? height : ''} 
        ${flex ? 'flex' : ''}
        w-full items-center`}>
            {children}
        </div>
    )
}

export default Block;