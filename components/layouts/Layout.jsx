import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
// import Script from 'next/script'
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>DevsEnv Next JS Tutorials...</title>
                <meta name="description" content="DevsEnv tutorials" />
                <meta name="keyword" content="DevsEnv, tutorials" />
            </Head>

            {/* <Script
                src="https://code.jquery.com/jquery-3.6.4.min.js"
            /> */}

            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
}