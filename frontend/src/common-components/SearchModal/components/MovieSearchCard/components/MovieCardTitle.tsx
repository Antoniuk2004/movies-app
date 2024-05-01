const MovieCardTitle = ({title}: { title: string }) => {
    return (
        <h3 className={"text-sm line-clamp-2 font-semibold mb-1"}>{title}</h3>
    )
}

export default MovieCardTitle;