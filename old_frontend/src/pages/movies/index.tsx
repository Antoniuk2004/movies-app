import {wrapper} from "@/components/wrapper";
import Dropdown from "@/pages/movies/Dropdown/Dropdown";
import {useState} from "react";
import {SortingType} from "@/pages/movies/Dropdown/SortingType";
import {CgArrowsExchangeAltV} from "react-icons/cg";
import Filter from "@/pages/movies/filters/Filter";
import {MdClose} from "react-icons/md";
import {useRouter} from "next/navigation";
import {useFilterParams} from "@/pages/movies/filters/use-effects/useFilterParams";
import {handleCleanButtonClick} from "@/pages/movies/filters/handlers";

const MoviesPage = () => {
    const filterParams = useFilterParams();
    const [currentSortingType, setCurrentSortingType] = useState<SortingType>(SortingType.ByPopularity);
    const router = useRouter();

    if(!router || !filterParams) return  null
    return (
        <div className={`movies-page ${wrapper}`}>
            <p className="text-4xl mt-[16px] mb-[8px] font-medium">Movies</p>
            <div className="sorting-settings flex">
                <div className="grid w-[900px]">
                    <div className="grid-settings">
                        <div className="sorting flex items-center gap-x-[16px]">
                            <Dropdown
                                currentSortingType={currentSortingType}
                                setCurrentSortingType={setCurrentSortingType}/>
                            <div className="cursor-pointer p-2 hover:bg-hoverColor rounded-xl">
                                <CgArrowsExchangeAltV/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movies-filter-container 2xl:w-[calc(100%-900px)] flex flex-col">
                    <div className="movies-filter-top flex items-center justify-between w-full mb-2">
                        <span className="capitalize">filters</span>
                        <span
                            onClick={() => handleCleanButtonClick(router, filterParams)}
                            className="flex select-none items-center gap-1 text-[14px] uppercase font-extralight cursor-pointer p-2 hover:bg-hoverColor rounded-xl">
                            clean<MdClose className="text-[18px]"/></span>
                    </div>
                    <Filter router={router} filterParams={filterParams}/>
                </div>
            </div>
        </div>
    )
}

export default MoviesPage;