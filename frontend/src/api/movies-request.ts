import {FilterParams} from "@/types/FilterParams";
import axios from "axios";
import Cookies from "js-cookie";

export const moviesRequest = async (filterParams: FilterParams) => {
    const url = 'http://localhost:8080/api/movies/filter';
    try {
        let response = await axios.post(url, {...filterParams}, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('jwt'),
            }
        });

        return response.data;
    } catch (e) {
        return [];
    }
}