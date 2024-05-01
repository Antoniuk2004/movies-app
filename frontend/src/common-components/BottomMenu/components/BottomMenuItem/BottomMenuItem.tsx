import BottomMenuItemLayout from "./BottomMenuItemLayout";
import {ReactNode} from "react";

type BottomMenuItemProps = {
    text?: string;
    icon: ReactNode;
    colStart: string;
    clickAction: () => void;
    iconSize?: string;
}

const BottomMenuItem = (props: BottomMenuItemProps) => {
    const {text, icon, colStart, clickAction, iconSize} = props;

    return (
        <BottomMenuItemLayout clickAction={clickAction} colStart={colStart}>
            <div className={`${iconSize ? iconSize : 'text-lg'}`}>{icon}</div>
            <span>{text}</span>
        </BottomMenuItemLayout>
    )
}

export default BottomMenuItem;