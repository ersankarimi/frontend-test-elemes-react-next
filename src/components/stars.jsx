import Image from "next/image";

import starGray from "../../public/icons/star-gray.svg";
import starOrange from "../../public/icons/star-orange.svg";

export const Stars = ({ fillStarNumber = 0, prefixKey = "" }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <Image
            src={index < fillStarNumber ? starOrange : starGray}
            alt="Star Icon"
            key={`star-${prefixKey}-${
              index < fillStarNumber ? "orange" : "gray"
            }-${index}`}
          />
        );
      })}
    </div>
  );
};
