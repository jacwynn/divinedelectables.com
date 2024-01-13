import ImageAndText from "../ImageAndText";

export default function HomepageWhyChooseUs() {
  const whyChooseUs = {
    image: {
      url: "/images/buffet.jpg",
      alt: "about",
      width: "500",
      mobileWidth: "250",
      height: "370",
    },
    content: {
      heading: "Why Choose Us?",
      paragraph: <Paragraph />,
      cta: "Contact Us",
      link: "/contact",
    },
  };

  return (
    <section className="mt-[5rem]">
      <div className="container px-4 mx-auto lg:px-0">
        <ImageAndText image={whyChooseUs.image} content={whyChooseUs.content} />
      </div>
    </section>
  );
}

const Paragraph = () => {
  return (
    <div className="space-y-4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
        <br />
        Why choose Divine Delectables?
      </p>
      <ul className="space-y-2 ">
        <li className="custom-list-icon">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </li>
        <li className="custom-list-icon">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </li>
        <li className="custom-list-icon">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </li>
      </ul>
      <p>Let's create the perfect event together.</p>
    </div>
  );
};
