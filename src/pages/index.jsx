import Image from "next/image";
import Link from "next/link";

import {
  Button,
  CategoryReceiptCard,
  Stars,
  TrendingReceiptCard,
} from "@/components";

import cakeIcon from "../../public/icons/cake.svg";
import doughnutIcon from "../../public/icons/doughnut.svg";
import fillLeftIcon from "../../public/icons/fill-left.svg";
import fillRightIcon from "../../public/icons/fill-right.svg";
import kebabIcon from "../../public/icons/kebab.svg";
import pizzaIcon from "../../public/icons/pizza.svg";
import salmonIcon from "../../public/icons/salmon.svg";
import cupcakeChocoImage from "../../public/images/cupcake-choco.png";
import donerKebabImage from "../../public/images/doner-kebab.png";
import doughnutMilkImage from "../../public/images/doughnut-milk.png";
import doughnutUnicornImage from "../../public/images/doughnut-unicorn.png";
import heroAccent100 from "../../public/images/hero-accent-100.png";
// eslint-disable-next-line no-unused-vars
import heroAccent from "../../public/images/hero-accent.png";
import heroBowlImage from "../../public/images/hero-bowl.png";
import kathiKebabImage from "../../public/images/kathi-kebab.png";
import pizzaMeatImage from "../../public/images/pizza-meat.png";
import pizzaPaperonImage from "../../public/images/pizza-paperoni.png";
import salmonRollImage from "../../public/images/salmon-roll.png";

const CATEGORY_RECEIPT_LIST = [
  {
    id: 1,
    title: "Cupcake",
    amount: 22,
    icon: cakeIcon,
    bgColorHex: "#F0FEEB",
    href: "/",
  },
  {
    id: 2,
    title: "Pizza",
    amount: 25,
    icon: pizzaIcon,
    bgColorHex: "#E4F2F4",
    href: "/",
  },
  {
    id: 3,
    title: "Kebab",
    amount: 12,
    icon: kebabIcon,
    bgColorHex: "#EAEEFA",
    href: "/",
  },
  {
    id: 4,
    title: "Salmon",
    amount: 22,
    icon: salmonIcon,
    bgColorHex: "#F9EEF3",
    href: "/",
  },
  {
    id: 5,
    title: "Doughnut",
    amount: 11,
    icon: doughnutIcon,
    bgColorHex: "#F3F7D9",
    href: "/",
  },
];

const TRENDING_RECEIPT_LIST = [
  {
    id: 1,
    title: "Pizza Paperoni",
    subTitle: "Pizza",
    rating: 4,
    imageSource: pizzaPaperonImage,
    href: "/",
  },
  {
    id: 2,
    title: "Pizza Meat",
    subTitle: "Pizza",
    rating: 3,
    imageSource: pizzaMeatImage,
    href: "/",
  },
  {
    id: 3,
    title: "Doner Kebab",
    subTitle: "Kebab",
    rating: 5,
    imageSource: donerKebabImage,
    href: "/",
  },
  {
    id: 4,
    title: "Salmon Roll",
    subTitle: "Salmon",
    rating: 4,
    imageSource: salmonRollImage,
    href: "/",
  },
  {
    id: 5,
    title: "Cupcake Choco",
    subTitle: "Cupcake",
    rating: 4,
    imageSource: cupcakeChocoImage,
    href: "/",
  },
  {
    id: 6,
    title: "Doughnut Milk",
    subTitle: "Doughnut",
    rating: 5,
    imageSource: doughnutMilkImage,
    href: "/",
  },
  {
    id: 7,
    title: "Doughnut Unicorn",
    subTitle: "Doughnut",
    rating: 4,
    imageSource: doughnutUnicornImage,
    href: "/",
  },
  {
    id: 8,
    title: "Kathi Kebab",
    subTitle: "Kebab",
    rating: 4,
    imageSource: kathiKebabImage,
    href: "/",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative mt-8 grid grid-rows-[max-content_1fr] items-center gap-24 overflow-hidden px-8 pb-5 lg:grid-cols-[1fr_1fr] xl:px-0">
        <Image
          priority
          src={heroAccent100}
          alt="Hero Bowl Image Accent"
          className="absolute -top-24 left-0 right-0 -z-20 w-full object-contain opacity-[4%]"
        />
        <div className="flex flex-col gap-8 md:items-center md:justify-center lg:items-start lg:justify-start">
          <div className="flex flex-col gap-8 md:items-center md:justify-center md:text-center lg:items-start lg:justify-start lg:text-left">
            <h1 className="text-4xl font-medium text-brand-primary-default sm:text-5xl sm:leading-[64px] lg:text-[64px]">
              Good Food Us
              <br />
              Good Mood
            </h1>
            <div className="relative flex items-center lg:hidden">
              <div className="absolute bottom-0 right-0 z-10 flex items-center gap-5 rounded-2xl bg-white/75 pb-4 pl-4 pr-12 pt-3 shadow-md backdrop-blur-sm 2xs:right-[15%] 2xs:pb-6 2xs:pl-6 2xs:pr-14 2xs:pt-3 md:right-0">
                <Image
                  priority
                  src={heroBowlImage}
                  alt="Hero Bowl Image"
                  className="max-h-[53px] max-w-[53px] bg-contain object-contain"
                />
                <div className="flex flex-col gap-[9px] md:text-left">
                  <div className="flex flex-col gap-0.5">
                    <h5 className="text-sm font-semibold text-black">
                      Green Salad Tomato
                    </h5>
                    <h6 className="text-xs text-brand-gray-default">Tomato</h6>
                  </div>
                  <Stars
                    fillStarNumber={4}
                    prefixKey="card-profile-hero-tomato"
                  />
                </div>
              </div>
              <picture className="flex items-center justify-center">
                <Image
                  priority
                  src={heroBowlImage}
                  alt="Hero Bowl Image Accent"
                  className="left-1/2 h-[255.31px] w-[230.85px] object-contain opacity-[4%] 2xs:h-[318.46px] 2xs:w-[318.71px] sm:h-[518.46px] sm:w-[518.71px]"
                />
                <Image
                  priority
                  src={heroBowlImage}
                  alt="Hero Bowl Image"
                  className="absolute max-h-[198.58px] max-w-[199.46px] bg-contain object-contain 2xs:max-h-[314.75px] 2xs:max-w-[312.9px] sm:max-h-[414.75px] sm:max-w-[412.9px]"
                />
              </picture>
            </div>
            <p className="text-lg leading-[29px] text-brand-gray-default md:w-3/4 lg:w-full">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button shadow>Daftar Sekarang</Button>
            </Link>

            <Link href="/">
              <Button variant="secondary">About Us</Button>
            </Link>
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="absolute bottom-0 left-0 z-10 flex items-center gap-5 rounded-2xl bg-white/75 px-6 pb-6 pl-6 pr-14 pt-3 shadow-sm backdrop-blur-sm">
            <Image
              priority
              src={heroBowlImage}
              alt="Hero Bowl Image"
              className="max-h-[53px] max-w-[53px] bg-contain object-contain"
            />
            <div className="flex flex-col gap-[9px]">
              <div className="flex flex-col gap-0.5">
                <h5 className="text-sm font-semibold text-black">
                  Green Salad Tomato
                </h5>
                <h6 className="text-xs text-brand-gray-default">Tomato</h6>
              </div>
              <Stars fillStarNumber={4} prefixKey="card-profile-hero-tomato" />
            </div>
          </div>
          <picture className="flex items-center justify-center">
            <Image
              priority
              src={heroBowlImage}
              alt="Hero Bowl Image Accent"
              className="left-1/2 h-[518.46px] w-[518.71px] object-contain opacity-[4%]"
            />
            <Image
              priority
              src={heroBowlImage}
              alt="Hero Bowl Image"
              className="absolute max-h-[414.75px] max-w-[412.9px] bg-contain object-contain"
            />
          </picture>
        </div>
      </section>

      <section className="relative flex flex-col gap-8 px-8 py-16 xl:px-0">
        <div className="flex flex-col text-2xl font-medium leading-[50px] sm:text-[38px]">
          <h2 className="text-brand-gray-dark">Browser Our Category</h2>
          <h2 className="text-brand-primary-default">Receipt</h2>
        </div>
        <div className="flex flex-col gap-10">
          <div className="grid auto-cols-max grid-flow-col gap-[10px] overflow-x-auto py-4">
            {[...CATEGORY_RECEIPT_LIST, ...CATEGORY_RECEIPT_LIST].map(
              (category) => (
                <CategoryReceiptCard key={category.id} {...category} />
              )
            )}
          </div>
          <div className="bottom-0 left-0 right-0 hidden place-content-end items-center gap-3 md:flex">
            <Button>
              <Image src={fillLeftIcon} alt="Fill Left Icon" />
              Prev
            </Button>
            <Button>
              Next
              <Image src={fillRightIcon} alt="Fill Left Icon" />
            </Button>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col gap-8 px-8 py-16 xl:px-0">
        <div className="flex flex-col text-2xl font-medium leading-[50px] sm:text-[38px]">
          <h2 className="text-brand-gray-dark">Browser Our Trending</h2>
          <h2 className="text-brand-primary-default">Receipt</h2>
        </div>
        <div className="flex flex-col gap-[68px]">
          <div className="grid grid-cols-1 gap-5 py-4 2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TRENDING_RECEIPT_LIST.map((trendingReceipt) => (
              <TrendingReceiptCard
                key={trendingReceipt.id}
                {...trendingReceipt}
              />
            ))}
          </div>

          <Link href="/" className="mx-auto">
            <Button>ALL Receipt</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
