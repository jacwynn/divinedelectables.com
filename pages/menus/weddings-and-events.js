import Layout from "@/components/Layout";
import { getMenuData } from '../../lib/sheets';
import Hero from "@/components/Hero";

const MENU_NAME = "WeddingsAndEvents";

export default function WeddingsAndEvents() {
    const weddingAndEventsData = {
        pageTitle: "Weddings & Events",
        content: <Paragraph />,
        image: {
            url: "/images/menus/weddings-and-events.png",
            alt: "Weddings & Events",
            width: "375",
            mobileWidth: "500",
            height: "200",
          },
        cta: {
          link: "/contact",
          text: "Book Us",
        }
    }

    return (
        <Layout>
            <Hero data={weddingAndEventsData} isMenuPage />
        </Layout>
    )
}

export async function getStaticProps() {
    const menuData = await getMenuData(MENU_NAME);
    return {
        props: {
            menuData: menuData,
        },
        revalidate: 1
    };
}

const Paragraph = () => {
    return (
        <>
            <p className="text-[1.25rem] mb-[1rem] text-brand-grey">We have created specially designed packages tailored to give your wedding the Divine Delectables special touch.</p>
            <p className="text-[1.25rem] text-brand-grey">Your event will include: A Selection of Hors D'oeuvres served before dinner, a Cookie Table (Chef's Choice), and a Three course sit down or Elegant Buffet Dinner. We will be happy to customize a menu for you specific needs.</p>
        </>
    )
}