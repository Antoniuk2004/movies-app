import {LayoutProps} from "@/types/LayoutProps";

type SideLayoutProps = LayoutProps & {
    gapX?: string;
    gapY?: string;
    flexColumn?: boolean;
    alignItems?: string;
}

const SideLayout = (props: SideLayoutProps) => {
    const {children, gapX, gapY, flexColumn, alignItems} = props;

    return (
        <div className={`flex  
            
            ${alignItems === null ? 'items-center' : alignItems}
            ${gapX ? gapX : ''}
            ${gapY ? gapY : ''}
            ${flexColumn ? 'flex-col' : 'flex-row'}`}
        >
            {children}
        </div>
    )
}

export default SideLayout;