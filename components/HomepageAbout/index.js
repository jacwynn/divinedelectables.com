import ImageAndText from "../ImageAndText";

export default function HomepageAbout() {
  const aboutContent = {
    image: {
      url: "/images/homepage-about.png",
      alt: "about",
      width: "400",
      height: "370",
    },
    content: {
      heading: "Catering with love and expertise",
      paragraph:
        "Paulette Blanks believes that catering is not just about providing exceptional food but also crafting unforgettable moments. At the heart of it all is Paulette's dedication to personalization, ensuring that every menu, every presentation, and every bite is tailored to your unique taste and preferences.",
      cta: "Read Her Story",
      link: "/about",
    },
  };

  return (
    <section className="mt-[5rem]">
      <div className="container px-4 mx-auto lg:px-0">
        <ImageAndText
          image={aboutContent.image}
          content={aboutContent.content}
        />
      </div>
    </section>
  );
}
