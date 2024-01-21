import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const isHomepage = router.pathname === "/";

  return (
    <div className="overflow-hidden">
      <Header />
      <main className={`${isHomepage ? "mt-[6.5625rem]" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
