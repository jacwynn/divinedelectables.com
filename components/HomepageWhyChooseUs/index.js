import ImageAndText from "../ImageAndText";
import Image from "next/image";

export default function HomepageWhyChooseUs() {
  const whyChooseUs = {
    image: {
      url: "/images/buffet.jpg",
      alt: "about",
      width: "500",
      mobileWidth: "500",
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
    <section className="mt-[5rem] relative">
      <div className="container w-[90%] lg:w-auto mx-auto bg-brand-bg-grey rounded-[2.5rem] p-[2.5rem] lg:p-24 lg:px-0">
        <ImageAndText image={whyChooseUs.image} content={whyChooseUs.content} />
      </div>
      <Image
        src={"/images/leafs.png"}
        alt="leaf"
        width={285}
        height={230}
        className="absolute top-[-5%] lg:top-auto lg:left-auto bottom-auto lg:bottom-[-15%] w-[8.125rem] lg:w-auto"
      />
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
      <p>Let&apos;s create the perfect event together.</p>
    </div>
  );
};

// TODO: Put the image inside the container so that I don't have to get magacial with the absolute positioning
