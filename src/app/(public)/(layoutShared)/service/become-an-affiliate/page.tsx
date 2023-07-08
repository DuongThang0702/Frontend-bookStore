import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../../../../public/section-img.jpg";
import sectionImg1 from "../../../../../../public/section1.svg";
import sectionImg2 from "../../../../../../public/section2.svg";
import sectionImg3 from "../../../../../../public/section3.svg";
import sectionWorksImg from "../../../../../../public/section-works.jpg";
import sectionStoreFront from "../../../../../../public/bg-storefront.webp";

const Page: FC = ({}) => {
  const sectionAbout = [
    {
      id: 1,
      img: sectionImg1,
      title: "Authors",
      content:
        "Promote your book via Bookshop to support your writing career and independent bookstores at the same time.",
    },
    {
      id: 2,
      img: sectionImg2,
      title: "Influencers",
      content: "Earn when promoting books you love",
    },
    {
      id: 3,
      img: sectionImg3,
      title: "Magazines, Publishers, and Web Publications",
      content: "Earn more on book sales from us than the competition",
    },
  ];

  const sectionHowItWorks = [
    {
      id: 1,
      content: "Sign up for an account",
    },
    {
      id: 2,
      content: "Share links to books you love",
    },
    {
      id: 3,
      content: "Earn 10% on each sale you create",
    },
  ];

  return (
    <>
      {/* Raised Banner */}
      <div className="raised-banner text-center flex justify-center items-center my-[1rem]">
        <Link href="" className="text-[1.8rem]">
          <span className="text-[#573BA2] text-4xl font-bold mr-[0.5rem]">
            {"$26,658,048.13"}
          </span>
          {"raised for local bookstores"}
        </Link>
      </div>

      {/* Banner */}
      <div className="banner relative" id="banner">
        <div className="banner-img h-[45rem] w-full">
          <Image src={bannerImg} alt="Banner Image" className="h-full w-full" />
        </div>
        <div className="flex h-full w-1/3 justify-center flex-col text-white z-10 absolute top-0 ml-[8rem]">
          <h1 className="font-bold text-7xl">{"Become an Affiliate"}</h1>
          <p className="text-[1.8rem] py-[2rem] leading-[3rem] w-4/5">
            {
              "Become an affiliate and earn an industry-leading 10% whenever someone buys a book you share. Please note that your account will need to go through a brief verification process in order for us to onboard your store. We will email you throughout this process to let you know the status of your page."
            }
          </p>
          <div>
            <Link
              href=""
              className="inline-block button primary text-[1.6rem] font-bold bg-[#DE2454] rounded-[4rem] px-10 py-4 hover:scale-105 hover:bg-[#333] duration-300"
            >
              {"JOIN THE AFFILIATE PROGRAM"}
            </Link>
          </div>
        </div>
      </div>

      {/* Section About*/}
      <section className="px-10rem section-about">
        <ul className="flex w-4/5 m-auto py-[8rem]">
          {sectionAbout.map((sectionAboutItem: any, index: number) => (
            <li
              key={index}
              className="w-1/3 flex flex-col justify-items-start items-center text-center"
            >
              <div>
                <Image src={sectionAboutItem.img} alt="Section Image" />
              </div>
              <h1 className="font-bold text-6xl text-[#2B0F42] my-6 leading-[5rem]">
                {sectionAboutItem.title}
              </h1>
              <p className="text-[1.8rem] w-4/5">{sectionAboutItem.content}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Section How It Works */}
      <section className="section-howitworks bg-[#EAE9ED] py-[6rem]">
        <div className="flex justify-center items-center w-[90%] m-auto">
          <div className="w-1/2">
            <Image src={sectionWorksImg} alt="How It Works Image" />
          </div>
          <div className="w-1/2 pl-[10rem]">
            <h1 className="font-bold text-7xl text-[#2B0F42]">
              {"How It Works:"}
            </h1>
            <ul className="my-10">
              {sectionHowItWorks.map(
                (sectionHowItWorkItem: any, index: number) => (
                  <li
                    key={index}
                    className="flex text-[1.8rem] mb-6 items-center"
                  >
                    <nav className="text-white bg-[#573BA3] px-[1.1rem] py-1 rounded-full">
                      {sectionHowItWorkItem.id}
                    </nav>
                    <nav className="ml-4">{sectionHowItWorkItem.content}</nav>
                  </li>
                )
              )}
            </ul>
            <h2 className="text-4xl font-bold text-[#2B0F42]">
              {"Want to learn more? Check our"}
            </h2>
            <h3 className="text-4xl font-bold mt-4">
              <Link
                href=""
                className="inline-block text-[#DE2454] hover:underline"
              >
                {"FAQ"}
              </Link>
            </h3>
          </div>
        </div>
      </section>

      {/* Section Become */}
      <section className="w-1/3 m-auto py-[8rem]">
        <h1 className="font-bold text-6xl text-[#2B0F42]">
          {"Why Become An Affiliate"}
        </h1>
        <p className="text-[1.8rem] my-8">
          {
            "Bookshop is all about giving back to everyone who supports book culture. Authors can double their royalties by selling their books through Bookshop, while supporting local bookstores at the same time! Publications that review books can earn much-needed financial support. Book clubs can earn sustaining funds on each pick, organizations can fundraise, and Instagram influencers can curate their favorite books on their own profile page and earn revenue. All while supporting the entire ecosystem around books! It's a win-win-win!"
          }
        </p>
        <nav className="text-[1.8rem]">
          {"Questions? Email"}
          <Link href="" className="text-[#DE2854] px-2 hover:underline">
            {"affiliates@bookshop.org"}
          </Link>
          {"to hear more."}
        </nav>
      </section>

      {/* Section StoreFront */}
      <section className="relative section-storefront">
        <div className="banner-img h-[45rem] w-full">
          <Image
            src={sectionStoreFront}
            alt="Banner Image"
            className="h-full w-full"
          />
        </div>
        <div className="flex h-full w-1/4 justify-center flex-col text-[#2C293B] z-10 absolute top-0 right-[10%] ml-[8rem]">
          <h1 className="font-bold text-7xl leading-[6rem] mb-[4rem]">
            {"Have Your Own Hassle-Free Storefront"}
          </h1>
          <div className="text-white">
            <Link
              href=""
              className="inline-block button primary text-[1.6rem] font-bold bg-[#DE2454] rounded-[4rem] px-10 py-4 hover:scale-105 hover:bg-[#333] duration-300"
            >
              {"BECOME AN AFFILIATE"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
