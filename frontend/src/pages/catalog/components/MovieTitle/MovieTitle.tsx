import MovieTitleLayout from "./MovieTitleLayout";

type MovieTitleProps = {
    title: string;
}

const MovieTitle = (props: MovieTitleProps) => {
    const {title} = props;

    return (
        <MovieTitleLayout>
            <span>{title}</span>
        </MovieTitleLayout>
    )
}

export default MovieTitle;