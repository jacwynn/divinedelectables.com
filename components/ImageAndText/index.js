import Image from "next/image";

export default function ImageAndText({ image, content }) {
  const { url, alt, width, height } = image;
  const { heading, paragraph, cta, link } = content;
  return (
    <div className="flex flex-col items-center lg:justify-around lg:flex-row">
      <Image src={url} alt={alt} width={width} height={height} />
      <div className="max-w-[540px]">
        {heading && <h3>{heading}</h3>}
        {paragraph && <p>{paragraph}</p>}
        {cta && link && <a href={link}>{cta}</a>}
      </div>
    </div>
  );
}

// TODO: finish styling the image and text component to match the mock (majority of work is on the content side) - 1/1
