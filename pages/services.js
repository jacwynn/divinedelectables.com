import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Services() {
    const data = {
        pageTitle: "Services",
        subTitle: "Delicious Options",
        content: "Our team is here to bring smiles to your guests and flavors that make an impact. Whether it's a cozy get-together or a grand celebration, we've got the perfect recipe for you. Book us now for a journey of delightful moments!",
        cta: {
          link: "/contact",
          text: "Book Your Feast",
        }
      }

    return (
        <Layout>
            <Hero data={data} />
        </Layout>
    )
}