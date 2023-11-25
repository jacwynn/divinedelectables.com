import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
    return (
        <div className="overflow-hidden">
            <Header />
                <main className="mt-[6.5625rem]">
                    { children }
                </main>
            <Footer />
        </div>
    )
}