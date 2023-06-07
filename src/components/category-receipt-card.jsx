import Image from "next/image";
import Link from "next/link";

import heroAccent100 from "../../public/images/hero-accent-100.png";

export const CategoryReceiptCard = ({
  title,
  amount,
  icon,
  href,
  bgColorHex = "#ffffff",
}) => {
  return (
    <Link
      href={href}
      className="group relative flex h-max cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-md px-[81px] py-[30px] text-center duration-200 hover:pb-[50px] hover:brightness-[0.99]"
      style={{
        backgroundColor: bgColorHex,
      }}
    >
      <Image
        src={heroAccent100}
        alt="Category Receipt Card Accent"
        className="pointer-events-none absolute inset-0 opacity-0 duration-200 group-hover:opacity-10"
      />
      <Image
        src={icon}
        alt={`category-receipt-icon-${title}`}
        className="z-10 h-[47px] w-[47px] object-contain"
      />
      <div className="z-10 flex flex-col items-center justify-center gap-2 text-brand-gray-dark">
        <h3 className="font-medium">{title}</h3>
        <h4>
          {amount} {amount > 1 ? "items" : "item"}
        </h4>
      </div>
    </Link>
  );
};
