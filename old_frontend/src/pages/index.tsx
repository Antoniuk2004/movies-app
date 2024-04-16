import MoviesList from "@/pages/home/movies-list/MoviesList";
import {wrapper} from "@/components/wrapper";

export default function Home() {
    return (
        <main className={`home-page ${wrapper}`}>
            <h1 className="text-3xl mb-4 capitalize text-opacity-80">new releases</h1>
            <MoviesList/>
        </main>
    );
}
