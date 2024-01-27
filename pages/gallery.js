import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Gallery() {
    const galleryHeroData = {
        pageTitle: "Gallery",
        subTitle: "Divine Delectables",
        content: "With a passion for crafting unforgettable dining experiences, our team is dedicated to elevating every event. At Divine Delectables, we believe that great food is a conversation starter, and we're here to help you create conversations that linger long after the last bite. Discover the art of catering with us.",
        cta: {
          link: "/contact",
          text: "Book Your Feast",
        }
    }

    return (
        <Layout>
            <Hero data={galleryHeroData} />
        </Layout>
    )
}