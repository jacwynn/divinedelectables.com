import Layout from "@/components/Layout";
import { getMenuData } from '../../lib/sheets';
import Hero from "@/components/Hero";

const MENU_NAME = "TeaParty";

export default function TeaParty({ menuData }) {
    const teaPartyData = {
        pageTitle: "Tea Party",
        content: <Paragraph />,
        image: {
            url: "/images/menus/tea-party.png",
            alt: "Build Your Picnic",
            width: "900",
            mobileWidth: "500",
            height: "370",
          },
        cta: {
          link: "/contact",
          text: "Book Us",
        }
    }

    return (
        <Layout>
            <Hero data={teaPartyData} isMenuPage />
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
            <p className="text-[1.25rem] mb-[1rem] text-brand-grey">We offer a peaceful, elegant experience and cater to your needs. Our tea parties are mobile so we can come to you.</p>
            <p className="text-[1.25rem] text-brand-grey">Call to schedule your party and add any special details for your tea party, i.e. birthday party, anniversary, retirement, baby shower, bridal shower, business meeting or just a day out with your closest friends.</p>
        </>
    )
}