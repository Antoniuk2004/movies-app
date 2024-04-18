import {FaUser} from "react-icons/fa";
import TopUserLayout from "@/common-components/Sign/TopUser/layout";

const TopUser = () => {
    return (
        <TopUserLayout>
            <FaUser className="text-2xl m-[10px]"/>
        </TopUserLayout>
    )
}

export default TopUser;