import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}