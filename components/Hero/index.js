import Image from "next/image";
import Link from "next/link";

export default function Hero({ data, ...props }) {
  const { pageTitle, subTitle, image, content, cta: { link, text } = {} } = data;

  if (props.isMenuPage) {
    return (
      <section className="bg-[#f7f7f7] mb-[7.5rem] pb-[4rem]">
        <div className="flex flex-col lg:flex-row pt-[8rem] lg:pt-[12rem] container mx-auto px-[1.5rem]">
          <div className="flex-1">
            <h3 className="text-[2.5rem] font-bold uppercase">{pageTitle}</h3>
            <hr class="w-[60px] border-t-[3px] border-brand-red my-4 mt-5"></hr>
            {content}
            {link && text ? (
              <Link className="mb-[5rem]" href={`${link}`}>
                <button className="p-4 mt-8 text-white uppercase bg-brand-red">{text}</button>
              </Link> 
            ) : ''}
          </div>
          <div className="flex items-center justify-center flex-1">
            <Image 
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#f7f7f7] mb-[7.5rem]">
      <div className="flex flex-col items-center justify-center pt-[8rem] max-w-[40.625rem] mx-auto">
        <h3 className="text-[2.5rem] font-bold uppercase">{pageTitle}</h3>
        <h2 className="text-[2rem] lg:text-[3.4375rem] mb-[3.125rem] uppercase">{subTitle}</h2>
        <p className="px-[1.5rem] lg:px-auto text-[1.25rem] mb-[2.5rem] text-brand-grey text-center">{content}</p>
        {link && text ? (
          <Link className="mb-[5rem]" href={`${link}`}>
            <button className="p-4 mt-8 text-white uppercase bg-brand-red">{text}</button>
          </Link> 
        ) : ''}
      </div>
    </section>
  );
}
