export type FilterParams = {
    genres: string | string[] | undefined,
    actors: string | string[] | undefined,
    directors: string | string[] | undefined,
    ageLimit: string | string[] | undefined,
    releaseYearFrom: string | undefined,
    releaseYearTo: string | undefined,
    ratingFrom: string | undefined,
    ratingTo: string | undefined,
    excludeGenres: string | string[] | undefined,
    excludeActors: string | string[] | undefined,
    excludeDirectors: string | string[] | undefined
}