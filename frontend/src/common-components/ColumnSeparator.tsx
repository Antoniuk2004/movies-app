import {LayoutProps} from "@/types/LayoutProps";

type ColumnSeparatorProps = LayoutProps & {
   gap?: string;
}

const ColumnSeparator = (props: ColumnSeparatorProps) => {
    const {children, gap} = props;

    return (
        <div className={`flex flex-col ${gap ? gap : ''}`}>
            {children}
        </div>
    )
}

export default ColumnSeparator;