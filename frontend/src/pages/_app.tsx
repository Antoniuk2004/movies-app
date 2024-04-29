import "@/styles/globals.css";
import '@mantine/core/styles.css';
import type {AppProps} from "next/app";
import Header from "@/common-components/Header/Header";
import RateModal from "@/pages/movies/[id]/components/RateModal/RateModal";
import {useRouter} from "next/router";
import {useValidate} from "@/utils/use-validate";
import Loader from "@/common-components/Loader/Loader";
import { MantineProvider } from "@mantine/core";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const currentPage = router.pathname;
    const headerPages = ["/movies/[id]", "/catalog", "/main"];
    const unsignedPages = ["/", "/signin", "/signup"];

    const status = useValidate(currentPage, unsignedPages);

    if (status !== 200 && !unsignedPages.includes(currentPage)) return <Loader/>;

    return (
        <MantineProvider>
            <RateModal/>
            {headerPages.includes(currentPage) && <Header currentPage={currentPage}/>}
            <Component {...pageProps} />
        </MantineProvider>
    );
}
