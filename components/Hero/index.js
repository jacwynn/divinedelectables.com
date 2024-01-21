import Link from "next/link";

export default function Hero({ data }) {
  const { pageTitle, subTitle, content, cta } = data;

  return (
    <section className="bg-[#f7f7f7] mb-[7.5rem]">
      <div className="flex flex-col items-center justify-center pt-[8rem] max-w-[40.625rem] mx-auto">
        <h3 className="text-[2.5rem] font-bold uppercase">{pageTitle}</h3>
        <h2 className="text-[2rem] lg:text-[3.4375rem] mb-[3.125rem] uppercase">{subTitle}</h2>
        <p className="px-[1.5rem] lg:px-auto text-[1.25rem] mb-[2.5rem] text-brand-grey text-center">{content}</p>
        <Link className="mb-[5rem]" href={`${cta.link}`}>
          <button className="p-4 mt-8 text-white uppercase bg-brand-red">{cta.text}</button>
        </Link>
      </div>
    </section>
  );
}
