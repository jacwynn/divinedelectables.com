import { getMenuData } from '../../lib/sheets';

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import MenuIntroSection from '@/components/MenuIntroSection';
import Menu from '@/components/Menu';

const MENU_NAME = "BuildYourPicnic";

export default function BuildYourPicnic({ menuData }) {
    const buildYourPicnicData = {
        pageTitle: menuData.pageTitle || "Build Your Picnic",
        content: <Paragraph />,
        image: {
            url: "/images/menus/build-your-picnic.png",
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
            <Hero data={buildYourPicnicData} isMenuPage />
            <MenuIntroSection data={menuData} />
            <Menu data={menuData} />
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
            <p className="text-[1.25rem] mb-[1rem] text-brand-grey">Let Divine Delectables add a touch of class to your Banquet, graduations parties, birthday celebrations, Anniversaries, family reunions and all other needs.</p>
            <p className="text-[1.25rem] text-brand-grey">This is our summer picnic menu. If you are planning a more elaborate affair ask to see our sit-down or elaborate build your own buffet menu.</p>
        </>
    )
}