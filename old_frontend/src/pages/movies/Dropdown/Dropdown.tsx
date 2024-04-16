import {useEffect, useRef, useState} from "react";
import {SortingType} from "@/pages/movies/Dropdown/SortingType";
import {DropdownProps} from "@/pages/movies/Dropdown/props/DropdownProps";
import {handleClickOutside, handleDropdownClick} from "@/pages/movies/Dropdown/handlers";
import {MdOutlineSort} from "react-icons/md";
import {FaChevronDown} from "react-icons/fa6";
import {ClickOutsideProps} from "@/pages/movies/Dropdown/props/ClickOutsideProps";

const Dropdown = (props: DropdownProps) => {
    const [isDropdownHidden, setIsDropdownHidden] = useState(true);
    const dropdownRef = useRef<null | HTMLDivElement>(null);
    const optionCSS = "hover:bg-hoverColor py-[12px] pl-[16px]";

    useEffect(() => {
        const clickOutsideProps: ClickOutsideProps = {
            setCurrentSortingType: props.setCurrentSortingType,
            dropdownRef: dropdownRef,
            setIsDropdownHidden: setIsDropdownHidden,
            event: null
        }

        document.addEventListener("mousedown", (e) => {
            clickOutsideProps.event = e;
            handleClickOutside(clickOutsideProps)
        });
        return () => {
            document.removeEventListener("mousedown", (e) => {
                clickOutsideProps.event = e;
                handleClickOutside(clickOutsideProps)
            });
        };
    }, [dropdownRef]);

    return (
        <div
            ref={(ref) => dropdownRef.current = ref}
            className={`sorting-type relative flex items-center hover:bg-hoverColor rounded-xl`}>
            <div
                className={`px-2 py-2 select-none flex items-center gap-x-[8px] capitalize focus:bg-white focus:outline-0 relative cursor-pointer`}
                onClick={() => handleDropdownClick(setIsDropdownHidden)}>
                <MdOutlineSort className="text-[18px]"/>
                <p>{props.currentSortingType}</p>
                <FaChevronDown className="text-[14px]"/>
            </div>
            {isDropdownHidden ? null :
                <div
                    className="options min-w-[180px] absolute left-0 top-[40px] bg-white text-[14px] rounded-xl cursor-pointer select-none capitalize">
                    <option
                        className={`${optionCSS} hover:rounded-t-xl`}
                        value={SortingType.ByDate}>by date
                    </option>
                    <option
                        className={optionCSS}
                        value={SortingType.ByRating}>by rating
                    </option>
                    <option
                        className={`${optionCSS} hover:rounded-b-xl`}
                        value={SortingType.ByPopularity}>by popularity
                    </option>
                </div>
            }
        </div>
    )
}

export default Dropdown