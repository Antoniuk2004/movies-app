import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Header from "../components/header/Header"
import Head from "next/head";
import {UseHeader} from "@/pages/UseHeader";

export default function App({Component, pageProps}: AppProps) {
    const hideHeader = UseHeader(Component.name);

    return (
        <div className="font-[Inter] text-sm leading-none">
            <Head>
                <title>Movie Watcher</title>
                <meta name="description" content="Movie Streaing Service"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {hideHeader ? null : <Header/>}
            <Component {...pageProps} />
        </div>
    );
}
