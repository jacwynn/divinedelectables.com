import Layout from "@/components/Layout";
import { getMenuData } from '../../lib/sheets';

const MENU_NAME = "WeddingsAndEvents";

export default function Menus() {
    return (
        <Layout>
            Weddings & Events
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