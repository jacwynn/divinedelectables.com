import Layout from "@/components/Layout";
import { getMenuData } from '../../lib/sheets';

const MENU_NAME = "TeaParty";

export default function Menus({ menuData }) {
    return (
        <Layout>
            Tea Party
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