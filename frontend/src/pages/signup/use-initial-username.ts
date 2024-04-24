import {useEffect, useState} from "react";
import {useRouter as useNormalRouter} from "next/router";
import {DataType} from "@/types/DataType";
import {initialData} from "@/common-components/Sign/initialData";
import {useRouter as useNavRouter} from "next/navigation";

export const useInitialUsername = () => {
    const navRouter = useNavRouter();
    const normalRouter = useNormalRouter();

    const [data, setData] = useState<DataType>(null);

    useEffect(() => {
        if (normalRouter.query.username) {
            const username = normalRouter.query.username as string;
            setData(initialData(navRouter, username));
        } else setData(initialData(navRouter));
    }, [normalRouter.query]);

    return {data, setData};
}