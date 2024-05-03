import Image from "next/image";
import React from "react";

const ImageHero = () => {
  return (
    <div className="w-1/2">
      <Image
        src={"/images/profile/developer-pic-1.png"}
        alt=""
        width={600}
        height={1000}
      />
    </div>
  );
};

export default ImageHero;
