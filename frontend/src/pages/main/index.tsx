import Wrapper from "@/common-components/Wrapper";
import MainPageLayout from "@/pages/main/MainPageLayout";
import MovieList from "@/pages/main/components/MovieList/MovieList";
import {useMainPageMovies} from "@/pages/main/use-main-page-movies";
import Loader from "@/common-components/Loader/Loader";
import {useRouter} from "next/navigation";
import MainHeader from "@/pages/main/components/MainHeader/MainHeader";
import SearchModal from "@/common-components/SearchModal/SearchModal";

const MainPage = () => {
    const mainPageMovies = useMainPageMovies();
    const router = useRouter();

    if (!mainPageMovies) return <Loader/>;

    const {recentMovies, recommendedMovies, popularMovies} = mainPageMovies;
    return (
        <>
            <SearchModal/>
            <MainHeader/>
            <Wrapper>
                <MainPageLayout>
                    <MovieList router={router} movies={recentMovies} title={'The most recent'}/>
                    <MovieList router={router} movies={popularMovies} title={'Popular'}/>
                    <MovieList router={router} movies={recommendedMovies} title={'Recommended'}/>
                </MainPageLayout>
            </Wrapper>
        </>
    )
}

export default MainPage;