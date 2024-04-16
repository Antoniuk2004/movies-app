export type InitialFilterValues = {
    genres:
        Array<{
            title: string,
            id: number
        }>
        |
        Array<{
            id: number,
            firstName: string,
            surname: string
        }>
    directors:
        Array<{
            title: string,
            id: number
        }>
        |
        Array<{
            id: number,
            firstName: string,
            surname: string
        }>,
    actors:
        Array<{
            title: string,
            id: number
        }>
        |
        Array<{
            id: number,
            firstName: string,
            surname: string
        }>

}