import axios from "axios";
import Cookies from "js-cookie";

export const getMovieById = async (id: number) => {
    const url = `http://localhost:8080/api/movies/${id}`

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })

        return {
            data: response.data,
            status: response.status
        }
    } catch (error) {
        console.error(error);
        return {
            data: null,
            status: error.response.status
        };
    }
}