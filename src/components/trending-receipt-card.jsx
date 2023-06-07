import Image from "next/image";
import Link from "next/link";

import heroAccent100 from "../../public/images/hero-accent-100.png";
import { Stars } from "./stars";

export const TrendingReceiptCard = ({
  title,
  href,
  subTitle,
  rating,
  imageSource,
}) => {
  const colorsCategoryObj = {
    Pizza: "#E6F3F5",
    Kebab: "#EAEEFA",
    Salmon: "#F9EEF3",
    Cupcake: "#F0FEEB",
    Doughnut: "#F3F7D9",
  };

  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-[19px] rounded-[17px] px-5 py-8"
      style={{
        backgroundColor: colorsCategoryObj[subTitle],
      }}
    >
      <Image
        src={heroAccent100}
        alt="Trending Receipt Card Accent"
        className="pointer-events-none absolute inset-0 opacity-0 duration-200 group-hover:opacity-10"
      />
      <Image
        src={imageSource}
        alt={`Trending Receipt Image ${title}`}
        className="z-[1] object-contain"
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 font-medium">
          <h3>{title}</h3>
          <h4 className="text-brand-primary-default">{subTitle}</h4>
        </div>
        <Stars fillStarNumber={rating} />
      </div>
    </Link>
  );
};
