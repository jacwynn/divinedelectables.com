import Hero from "@/components/Hero";
import ImageAndText from "@/components/ImageAndText";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function About() {

  const heroData = {
    pageTitle: "About",
    subTitle: "Divine Delectables",
    content: "With a passion for crafting unforgettable dining experiences, our team is dedicated to elevating every event. At Divine Delectables, we believe that great food is a conversation starter, and we're here to help you create conversations that linger long after the last bite. Discover the art of catering with us.",
    cta: {
      link: "/contact",
      text: "Book Your Feast",
    }
  }

  const aboutData = {
    image: {
      url: "/images/about-img.png",
      alt: "about",
      width: "570",
      mobileWidth: "500",
      height: "855",
    },
    content: {
      heading: "Making Moments Memorable",
      paragraph: <Paragraph />,
    },
    pageContext: {
      pageURL: '/about'
    } //convert using react context api
  };

  return (
    <Layout>
      <Hero data={heroData} />
      <section className="relative">
        <div className="container mx-auto">
          <Image 
            src={"/images/about-shape.png"}
            alt="about shape"
            width={615}
            height={500}
            className="absolute top-[-15%] left-0 z-[-1]"
          />
          <ImageAndText image={aboutData.image} content={aboutData.content} context={aboutData.pageContext} />
          <Image 
            src="/images/about-beet.png"
            alt="beet"
            width={614}
            height={500}
            className="absolute top-[65%] lg:top-[18%] right-0 z-[-1]"
          />
        </div>
      </section>
    </Layout>
  );
}

const Paragraph = () => {
  return (
    <div className="space-y-4">
      <p>Paulette Blanks is the founder of Divine Delectables Baking & Catering Company, a full-service catering business based in Pittsburgh Pennsylvania. As a young child, Paulette spent many impressionable hours watching her grandmothers create delectable dishes. Through the process, she gained an insatiable passion for cooking and discovered that she had a gift to wow the recipients of her meals. She developed the need to consistently expand her palate through exploration of different types of cuisines. It is not uncommon after a dinner on-the-town to find her exploring the kitchens and engaging the chefs of various restaurants.</p>
      <p>This passion, talent and love for cooking fueled her desire to open a business. In 2003, Paulette started her premiere catering company after hearing a divine inspirational message. This Christian based business initially began by providing classic foods with a homemade taste for small-scale events. More than ten years later, Divine Delectables Baking & Catering Company has grown to become one of the leading caterers in Pittsburgh.</p>
      <p>The company has served large-scale weddings, board meetings, conferences, fundraisers, grand openings and Fortune 500 companies. It has a stellar reputation for providing enjoyable quality foods from an extensive menu, impeccable professional service, and being a valuable resource for all the catering needs of the individual, non-profit and corporate client. We specialize in creating a unique, pleasurable, experience. Paulette is married to Monroe Blanks Jr. and they reside in Pittsburgh, Pennsylvania.</p>
    </div>
  );
};