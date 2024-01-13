import Layout from "@/components/Layout";

//Components
import HomepageHero from "@/components/HomepageHero";
import HomepageServices from "@/components/HomepageServices";
import HomepageAbout from "@/components/HomepageAbout";
import HomepageMenu from "@/components/HomepageMenu";
import HomepageWhyChooseUs from "@/components/HomepageWhyChooseUs";

export default function Home() {
  return (
    <Layout>
      <HomepageHero />
      <HomepageServices />
      <HomepageAbout />
      <HomepageMenu />
      <HomepageWhyChooseUs />
    </Layout>
  );
}
