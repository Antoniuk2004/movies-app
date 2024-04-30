import ModalSearchbarLayout from "./ModalSearchbarLayout";
import {IoMdSearch} from "react-icons/io";
import {useSearchValue} from "@/common-components/SearchModal/use-effects/use-search-value";
import ClearInputButton from "@/common-components/SearchModal/components/ClearInputButton/ClearInputButton";
import {handleSearchValueChange} from "@/common-components/SearchModal/handlers";

const ModalSearchbar = () => {
    const searchValue = useSearchValue();

    return (
        <ModalSearchbarLayout>
            <IoMdSearch className={"text-xl"}/>
            <input
                autoComplete={"off"}
                onChange={(e) => handleSearchValueChange(e)}
                value={searchValue}
                placeholder={"Search movies"}
                type={"text"}
                className={"text-neutral-800 placeholder:text-neutral-500 focus:outline-0 px-3.5 w-full"}/>
            <ClearInputButton searchValue={searchValue}/>
        </ModalSearchbarLayout>
    )
}

export default ModalSearchbar;