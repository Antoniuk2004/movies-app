import {LayoutProps} from "@/types/LayoutProps";

const AccountPresenceLayout = ({children}: LayoutProps) => {
    return (
        <div className="mb-4 flex gap-x-2 justify-center text-gray-500">
            {children}
        </div>
    )
}

export default AccountPresenceLayout;