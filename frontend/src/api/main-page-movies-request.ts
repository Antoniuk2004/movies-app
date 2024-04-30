import axios from "axios";
import Cookies from "js-cookie";

export const mainPageMoviesRequest = async () => {
    const url = 'http://localhost:8080/api/movies/?limit=10';

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })

        return response.data;
    }
    catch (e){
        return null;
    }
}