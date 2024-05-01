import Wrapper from "@/common-components/Wrapper";
import MainPageLayout from "@/pages/main/MainPageLayout";
import MovieList from "@/pages/main/components/MovieList/MovieList";
import {useMainPageMovies} from "@/pages/main/use-main-page-movies";
import Loader from "@/common-components/Loader/Loader";
import {useRouter} from "next/navigation";
import MainHeader from "@/pages/main/components/MainHeader/MainHeader";
import Footer from "@/common-components/Footer/Footer";
import BottomMenu from "@/common-components/BottomMenu/BottomMenu";

const MainPage = () => {
    const mainPageMovies = useMainPageMovies();
    const router = useRouter();

    if (!mainPageMovies) return <Loader/>;

    const {recentMovies, recommendedMovies, popularMovies} = mainPageMovies;
    return (
        <>
            <MainHeader/>
            <Wrapper>
                <MainPageLayout>
                    <MovieList router={router} movies={recentMovies} title={'The most recent'}/>
                    <MovieList router={router} movies={popularMovies} title={'Popular'}/>
                    <MovieList router={router} movies={recommendedMovies} title={'Recommended'}/>
                </MainPageLayout>
            </Wrapper>
            <BottomMenu/>
            <Footer/>
        </>
    )
}

export default MainPage;