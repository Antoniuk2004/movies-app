import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Header from "@/common-components/Header/Header";
import RateModal from "@/pages/movies/[id]/components/RateModal/RateModal";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <RateModal/>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}
