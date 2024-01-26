import Layout from "@/components/Layout";
import { getMenuData } from '../../lib/sheets';

const MENU_NAME = "BuildYourPicnic";

export default function Menus({ menuData }) {
    return (
        <Layout>
            Build Your Picnic
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