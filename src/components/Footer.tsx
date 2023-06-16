import Link from "next/link";
import { FC } from "react";
import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLink } from "@/utils/contants";
import Image from "next/image";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const star = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="w-full bg-[#2B0F42] py-20">
        <div className="flex justify-around">
          <div className="flex flex-col">
            <div className="flex ">
              <span>
                <FontAwesomeIcon
                  icon={icon.faStar}
                  style={{ color: "#00b67a" }}
                  className="text-4xl mr-2"
                />
              </span>
              <h1 className="text-white text-4xl">Trustpilot</h1>
            </div>
            <div className="flex py-4">
              {star.map((el) => (
                <span
                  key={el}
                  className="bg-[#00b67a] h-[4rem] w-[4rem] mr-[1.15rem] flex 
                justify-center items-center"
                >
                  <FontAwesomeIcon
                    icon={icon.faStar}
                    style={{ color: "#ebebeb" }}
                    className="text-3xl"
                  />
                </span>
              ))}
            </div>
            <div>
              <p className="text-white text-xl pb-6">
                TrustScore <span className="font-bold"> 4.9 </span>|
                <span className="font-bold"> 19.016 </span> reviews
              </p>
            </div>
            <div className="ml-[-0.5rem]">
              <Image src={"/logo2.png"} width={199} height={116} alt="logo2" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            {footerLink.map((el) => (
              <Link
                href={el.path}
                key={el.id}
                className="block text-white text-center text-[2rem] mb-[1.6rem]"
              >
                {el.value}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <>
              <h1 className="text-white text-3xl">
                Follow us
                <span className="px-4">
                  <Link href={"#"}>
                    <FontAwesomeIcon
                      icon={icon.faTwitter}
                      className="text-white text-4xl pr-4"
                    />
                  </Link>
                  <Link href={"#"}>
                    <FontAwesomeIcon
                      icon={icon.faFacebook}
                      className="text-white text-4xl pr-4"
                    />
                  </Link>
                  <Link href={"#"}>
                    <FontAwesomeIcon
                      icon={icon.faInstagram}
                      className="text-white text-4xl pr-4"
                    />
                  </Link>
                </span>
              </h1>
            </>
            <>
              <h1 className="text-white text-2xl text-center py-4">
                Payments Accepted
              </h1>
              <Image src={"/card.png"} width={100} height={22} alt="card" />
              <Image src={"/logo3.png"} width={100} height={1} alt="card" />
            </>
          </div>
        </div>
        <div className=" w-main mx-auto">
          <div className="w-1/2 mx-auto flex justify-between text-3xl">
            <p className="text-white">© 2023 All Rights Reserved </p>
            <Link className="text-white" href={"/terms-of-use"}>
              Terms of Use
            </Link>
            <Link className="text-white" href={"/privacy-policy"}>
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
