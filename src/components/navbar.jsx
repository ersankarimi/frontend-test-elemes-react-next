import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import logoElemesid from "../../public/images/logo-elemesid.svg";
import { Button } from "./button";

const NAVLINKS = [
  {
    label: "Home",
    href: "/",
    withBadge: false,
  },
  {
    label: "About",
    href: "/",
    withBadge: false,
  },
  {
    label: "Promotions",
    href: "/",
    withBadge: true,
    badgeLabel: "hot",
  },
  {
    label: "Blogs",
    href: "/",
    withBadge: false,
  },
  {
    label: "Contact Us",
    href: "/",
    withBadge: false,
  },
];

export const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 flex items-center justify-between gap-6 bg-white px-8 py-6 shadow-sm xl:px-0">
      <Link href="/">
        <picture className="block h-9 max-h-9 w-full sm:w-[150px] lg:h-[50px] lg:max-h-[50px] lg:w-[207px]">
          <Image
            src={logoElemesid}
            alt="Elemes Group Logo"
            className="h-full w-full object-contain"
          />
        </picture>
      </Link>

      <ul className="hidden items-center gap-4 md:flex lg:gap-8">
        {NAVLINKS.map((navlink) => (
          <NavlinkItem key={`navlink-item-${navlink.label}`} {...navlink} />
        ))}
      </ul>

      <div className="flex items-center gap-4 lg:gap-6">
        <Link
          href="/"
          className="hidden text-sm font-medium text-[#333333] duration-200 hover:brightness-[20%] md:block"
        >
          Masuk
        </Link>
        <Link href="/">
          <Button>Daftar Sekarang</Button>
        </Link>
      </div>
    </header>
  );
};

export const NavlinkItem = ({
  label = "",
  href = "",
  withBadge = false,
  badgeLabel = "",
}) => {
  return (
    <li
      key={`navlink-item-${label}`}
      className={cn("py-3", {
        relative: withBadge,
      })}
    >
      {withBadge && (
        <span className="absolute -right-2.5 -top-0 inline-flex items-center justify-center rounded-lg bg-[#E7462D] px-[9px] py-0.5 text-[8px] font-bold uppercase text-white lg:-right-4">
          {badgeLabel}
        </span>
      )}
      <Link
        href={href}
        className="whitespace-nowrap text-sm font-medium text-[#757575] duration-200 hover:brightness-[20%]"
      >
        {label}
      </Link>
    </li>
  );
};
