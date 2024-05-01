import {Modal} from "@mantine/core";
import {useModalFunctions} from "@/common-components/SearchModal/use-effects/use-modal-functions";
import {handleSearchModalClose} from "@/common-components/SearchModal/handlers";
import SearchModalHeader from "@/common-components/SearchModal/components/SearchModalHeader/SearchModalHeader";
import ModalSearchbar from "@/common-components/SearchModal/components/ModalSearchbar/ModalSearchbar";
import {useViewportSize} from "@mantine/hooks";
import {Key, useState} from "react";
import MovieSearchCard from "@/common-components/SearchModal/components/MovieSearchCard/MovieSearchCard";
import {Movie} from "@/types/Movie";
import MovieListLayout from "@/common-components/SearchModal/components/MovieSearchCard/components/MoviesListLayout";
import {useRouter} from "next/navigation";

const SearchModal = () => {
    const {opened, close} = useModalFunctions();
    const {width} = useViewportSize();
    const [movies, setMovies] = useState([]);
    const router = useRouter();

    return (
        <Modal.Root
            transitionProps={{transition: 'slide-down'}}
            radius={0}
            yOffset={'1.75rem'}
            size={'46.25rem'}
            fullScreen={width < 1025}
            opened={opened}
            onClose={handleSearchModalClose}>
            <Modal.Overlay/>
            <Modal.Content>
                <SearchModalHeader close={close}/>
                <ModalSearchbar setMovies={setMovies}/>
                <MovieListLayout>
                    {movies && movies.map((movie: Movie, index: Key) => (
                        <MovieSearchCard
                            router={router}
                            movie={movie}
                            key={index}/>
                    ))}
                </MovieListLayout>
            </Modal.Content>
        </Modal.Root>
    )
}

export default SearchModal;