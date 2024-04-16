import {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {InitialFilterValues} from "@/pages/movies/filters/InitialFilterValues";

export const useInitialFilterValues = (router: AppRouterInstance) => {
    const [filterInitialValues, setFilterInitialValues] = useState<InitialFilterValues | null>(null);

    useEffect(() => {
        const getFilterValuesAsync = async () => {
            const url = "http://localhost:8080/api/filter/";
            const jwt = Cookies.get("JWT");

            if (jwt) {
                try {
                    const response = await axios.get(url, {
                        headers: {
                            'Authorization': `Bearer ${jwt}`,
                            'Content-Type': 'application/json',
                        }
                    })

                    return response.data;
                } catch (error) {
                    router.push("/signin");
                }
            } else {
                router.push("/signin");
            }
        }
        const response = getFilterValuesAsync();
        response.then((data) => {
            setFilterInitialValues(data)
        })
    }, []);

    return filterInitialValues;
}