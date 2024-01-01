import Layout from "@/components/Layout";

//Components
import HomepageHero from "@/components/HomepageHero";
import HomepageServices from "@/components/HomepageServices";

export default function Home() {
  return (
    <Layout>
      <HomepageHero />
      <HomepageServices />
    </Layout>
  )
}
