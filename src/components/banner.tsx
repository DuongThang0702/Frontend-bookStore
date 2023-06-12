import { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
interface indexProps {}

const index: FC<indexProps> = ({}) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  return (
    <div className="overflow-x-hidden">
      <Slider {...settings}>
        <Image width={500} height={80} alt="banner" src="/banner1.png" />
        <Image width={500} height={80} alt="banner" src="/banner2.png" />
      </Slider>
    </div>
  );
};

export default index;
