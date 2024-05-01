import ClearInputButtonLayout from "./ClearInputButtonLayout";
import {IoMdClose} from "react-icons/io";
import {Dispatch, SetStateAction} from "react";
import { Movie } from "@/types/Movie";

type ClearInputButtonProps = {
    searchValue: string;
    setMovies: Dispatch<SetStateAction<Movie[]>>
}

const ClearInputButton = (props: ClearInputButtonProps) => {
    const {searchValue, setMovies} = props;

    return (
        <ClearInputButtonLayout setMovies={setMovies} searchValue={searchValue}>
            <IoMdClose className={"text-xl"}/>
        </ClearInputButtonLayout>
    )
}

export default ClearInputButton;