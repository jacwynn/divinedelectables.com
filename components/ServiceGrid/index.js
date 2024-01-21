import Image from "next/image";
import Link from "next/link";

export default function ServiceGrid() {

    const servicesData = [
        {
            image: {
                url: "/images/services-build-your-picnic.jpg",
                alt: "Build Your Picnic",
                width: "600",
                mobileWidth: "500",
                height: "475",
            },
            content: {
                heading: "Build Your Picnic",
                paragraph: "Let Divine Delectables add a touch of class to your Banquet, graduations parties, birthday celebrations, Anniversaries, family reunions and all other needs.",
                cta: "View More",
                link: "/menus/build-your-picnic",
                bgColor: "#AF3F3C"
            },
        },
        {
            image: {
                url: "/images/services-tea-party.png",
                alt: "Tea Party",
                width: "600",
                mobileWidth: "500",
                height: "475",
            },
            content: {
                heading: "Tea Party",
                paragraph: "Let Divine Delectables add a touch of class to your Banquet, graduations parties, birthday celebrations, Anniversaries, family reunions and all other needs.",
                cta: "View More",
                link: "/menus/tea-party",
                bgColor: "#6b7a17"
            },
        },
        {
            image: {
                url: "/images/services-wedding-events.jpg",
                alt: "Weddings & Events",
                width: "500",
                mobileWidth: "500",
                height: "370",
            },
            content: {
                heading: "Weddings & Events",
                paragraph: "Let Divine Delectables add a touch of class to your Banquet, graduations parties, birthday celebrations, Anniversaries, family reunions and all other needs.",
                cta: "View More",
                link: "/menus/weddings-and-events",
                bgColor: "#D9534F"
            },
        },
    ]

    return (
        <section>
            <div className="container mx-auto space-y-24 lg:space-y-0 mt-[-7.5rem] lg:mt-0">
                {servicesData.map((service, index) => (
                    <div key={index} className={`flex flex-col-reverse lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex-1">
                            <Image 
                                src={service.image.url}
                                alt={service.image.alt}
                                width={service.image.width}
                                height={service.image.height}
                                className="w-[100%]"
                            />
                        </div>
                        <div className={`flex-1 p-5 lg:p-0`} style={{ backgroundColor: service.content.bgColor }}>
                            <div className="flex flex-col justify-center h-full max-w-[400px] mx-auto text-white">
                                <h2 className="text-[2.5rem] font-bold mb-[1rem]">{service.content.heading}</h2>
                                <p className="mb-[1.5rem] text-[1.25rem]">{service.content.paragraph}</p>
                                <Link href={`${service.content.link}`} className="underline uppercase text-[1.25rem]">{service.content.cta}</Link>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </section>
    )
}