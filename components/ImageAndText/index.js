"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageAndText({ image, content }) {
  const { url, alt, width, mobileWidth, height } = image;
  const { heading, paragraph, cta, link } = content;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkMediaQuery = () => {
      if (typeof window !== "undefined") {
        const match = window.matchMedia("(min-width: 1024px)").matches;
        setIsDesktop(match);
      }
    };

    checkMediaQuery();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMediaQuery);
      return () => window.removeEventListener("resize", checkMediaQuery);
    }
  }, []);

  return (
    <div className="flex flex-col items-center lg:justify-around lg:flex-row">
      <Image
        src={url}
        alt={alt}
        width={isDesktop ? width : mobileWidth}
        height={height}
      />
      <div className="max-w-[400px] mt-8 lg:mt-0">
        {heading && (
          <h2
            className="text-[1.375rem] lg:text-[2.5rem] font-bold uppercase"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>
        )}
        <hr className="w-[60px] border-t-[3px] border-brand-red my-4 mt-5"></hr>
        {paragraph && <div className="text-brand-grey">{paragraph}</div>}
        {cta && link && (
          <a href={link}>
            <button className="p-4 mt-8 text-white uppercase bg-brand-red">
              {cta}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
