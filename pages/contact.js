import Hero from "@/components/Hero"
import Layout from "@/components/Layout"

export default function Contact() {
    const contactHeroData = {
        pageTitle: "Contact Us",
        subTitle: "Get In Touch!",
        content: "Our team is here to bring smiles to your guests and flavors that make an impact. Whether it's a cozy get-together or a grand celebration, we've got the perfect recipe for you. Book us now for a journey of delightful moments!",
    }

    return (
        <Layout>
            <Hero data={contactHeroData} />
        </Layout>
    )
}