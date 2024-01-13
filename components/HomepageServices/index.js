import Image from "next/image";

export default function HomepageServices() {
  return (
    <section className="mt-[3rem] lg:mt-[-5rem] relative">
      <Image
        src={"/images/rosemary-stem.png"}
        alt="rosemary stem"
        width={215}
        height={155}
      />
      <div className="container pb-[9rem] w-[90%] lg:w-auto mt-12 mx-auto bg-brand-bg-grey rounded-[2.5rem] p-4 lg:p-24">
        <div className="text-center max-w-[70rem] mx-auto mb-8 lg:mb-24">
          <h2 className="text-[1.375rem] lg:text-[2.5rem] font-bold uppercase">
            Take your event to the next level with our full-service catering
            services
          </h2>
        </div>
        <div className="flex flex-col justify-center space-y-16 text-center lg:space-x-16 lg:space-y-0 lg:flex-row">
          <div className="flex flex-col lg:w-[400px]">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src={"/images/build-your-picnic.svg"}
                alt="build your picnic"
                width={184}
                height={137}
              />
              <h4 className="font-bold text-[1.125rem] tracking-[0.06em]">
                Build Your Picnic
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:w-[400px]">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src={"/images/tea-party.svg"}
                alt="tea party"
                width={184}
                height={137}
              />
              <h4 className="font-bold text-[1.125rem] tracking-[0.06em]">
                Tea Party
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:w-[400px]">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src={"/images/weddings.svg"}
                alt="weddings and events"
                width={184}
                height={137}
              />
              <h4 className="font-bold text-[1.125rem] tracking-[0.06em]">
                Weddings/Events
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/images/spaghetti.png"}
        alt="spaghetti"
        width={620}
        height={500}
        className="absolute right-0 bottom-[-7rem] lg:bottom-[-10rem] w-[250px] lg:w-[300px]"
      />
    </section>
  );
}

// TODO: Put the image inside the container so that I don't have to get magacial with the absolute positioning
