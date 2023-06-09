import Image from "next/image";
import { useRef } from "react";

import fillLeftIcon from "../../public/icons/fill-left.svg";
import fillRightIcon from "../../public/icons/fill-right.svg";
import { Button } from "./button";

export const HorizontalScrollingWithButtons = ({ children }) => {
  const scrollContainerCategoryReceiptList = useRef(null);

  const handleScrollLeft = () => {
    scrollContainerCategoryReceiptList.current.scrollBy({
      top: 0,
      left: -232,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollContainerCategoryReceiptList.current.scrollBy({
      top: 0,
      left: 232,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="grid auto-cols-max grid-flow-col gap-[10px] overflow-x-auto py-4 hover:cursor-grab"
        ref={scrollContainerCategoryReceiptList}
      >
        {children}
      </div>
      <div className="bottom-0 left-0 right-0 hidden place-content-end items-center gap-3 md:flex">
        <Button onClick={handleScrollLeft}>
          <Image src={fillLeftIcon} alt="Fill Left Icon" />
          Prev
        </Button>
        <Button onClick={handleScrollRight}>
          Next
          <Image src={fillRightIcon} alt="Fill Left Icon" />
        </Button>
      </div>
    </>
  );
};
