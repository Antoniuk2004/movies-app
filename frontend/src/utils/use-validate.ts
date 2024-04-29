import {useEffect, useState} from "react";
import {validationRequest} from "@/api/validation-request";
import {useRouter} from "next/navigation";
import {effect} from "@preact/signals-react";
import {statusSignal} from "@/signals/status-signal";

export const useValidate = (currentPage: string, unsignedPages: string[]) => {
    const [status, setStatus] = useState<null | number>(null);
    const router = useRouter();

    useEffect(() => {
        const validate = async () => {
            statusSignal.value = await validationRequest();

            effect(() => {
                const status = statusSignal.value;

                if (!unsignedPages.includes(currentPage) && status !== 200) {
                    router.push("/")
                }
                setStatus(status);
            })
        }

        validate();
    }, []);

    return status;
}