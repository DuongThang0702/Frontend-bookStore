"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components";
import { navigationAboutPage } from "@/utils/contants";
import path from "@/utils/path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
// #79C5B2
const booksStore = [
  {
    id: 1,
    desc: "“This funding came at the most perfect time when I prayed I would have rent for next month and payroll and purchases. Your team will never, ever, know how much booksellers like me appreciate your business.”",
    name: "VaLinda Miller",
    sub: "Turning Page Bookshop",
    location: "Goose Creek, SC",
  },
  {
    id: 2,
    desc: "“These funds mean more than money. It means community to me. And for that, I will be forever grateful.”",
    name: "Fawn Fernandes",
    sub: "Curious Capybara Bookshop",
    location: "Hendersonville, TN",
  },
  {
    id: 3,
    desc: "“Bookshop has absolutely transformed our business, and I am just so continually grateful for your service and, ultimately, support. Thank you so much for your vision and your commitment to us indies.”",
    name: "Lexi Walter Wright",
    sub: "High Five Books",
    location: "Northampton, MA",
  },
];

const imageFont = [
  { id: 1, path: "/font.png", alt: "image" },
  { id: 2, path: "/font2.png", alt: "image" },
  { id: 3, path: "/font3.png", alt: "image" },
  { id: 4, path: "/font5.png", alt: "image" },
  { id: 5, path: "/font6.png", alt: "image" },
  { id: 6, path: "/font7.png", alt: "image" },
];

const FQ = [
  {
    question: "Can I partner or advertise with Bookshop.org?",
    answer:
      "Absolutely. We offer a range of advertising and partnership opportunities.For partnerships and promotions, contact promotions@bookshop.org.For website and email advertising, contact ads@bookshop.org",
  },
  {
    question: "Does Bookshop.org ship to Canada or internationally?",
    answer:
      "Bookshop.org only ships to the US, but we do have Bookshop UK and Bookshop Spain available for those regions. We hope to help support bookstores all over the world in the future.",
  },
  {
    question: "Will Bookshop.org sell audiobooks and or ebooks?",
    answer:
      "We sell audiobooks via an affiliate partnership with Libro.fm. You can see the links on the product page of titles that are carried by them. We are working on an indie-friendly ebook solution.",
  },
  {
    question: "How does Bookshop work with independent bookstores?",
    answer:
      "Bookshop supports indies in two ways:— 10% of direct and affiliate sales on Bookshop.org are added to an earnings pool that is evenly divided and distributed to independent bookstores every six months.— Stores that are affiliates also can share their Bookshop.org links on social media, email newsletters, or on their websites to earn 30% of the cover price (the full profit margin) on any sales they generate, without having to do the work of keeping inventory, picking, packing, shipping or handling complaints and returns.All books are sent from our wholesaler Ingram, not the bookstore's actual inventory.",
  },
  {
    question: "How does Bookshop.org promote local bookstores?",
    answer:
      "—Every receipt informs customers about the bookstores near them.—If a Bookshop.org customer opts in, their local bookstore will be given their email address—Affiliate stores can create recommendation lists (staff picks, etc) on Bookshop.org, boosting their visibility and earning a commission on every sale generated from the list.",
  },
];
const Page: FC = () => {
  return (
    <>
      <div className="w-full border-b mb-10">
        <div className="w-4/5 mx-auto p-10 flex justify-center gap-x-24">
          <Link href={`${path.HOME}`}>
            <Image src={`/logowhite.png`} width={239} height={35} alt="logo" />
          </Link>
          <div className="flex items-center justify-center">
            {navigationAboutPage.map((el) => (
              <Link
                href={el.path}
                key={el.id}
                className="text-[1.4rem] block font-header font-light mx-6  opacity-1 tracking-wider"
              >
                {el.value}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Link
              className="bg-[#f1f1f1] py-[1rem] uppercase px-[2rem] text-[1.4rem] text-[#584299] rounded-full font-main font-semibold tracking-widest hover:bg-black hover:text-white ease-linear transition-all duration-500"
              href={`/${path.HOME}`}
            >
              Search
            </Link>
            <Link
              href={`${path.ABOUT}`}
              className="text-[1.4rem] ml-8 font-main font-semibold hover:text-purple duration-500"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
      <div className="grid gap-32">
        <div className="w-main mx-auto" id="about-us">
          <div className="flex">
            <Image
              src={"/imageInAboutUs.png"}
              width={424}
              height={328}
              alt="image"
              className="mx-4"
            />
            <div className="flex flex-col justify-center mx-4">
              <div className="text-[1.6rem]">
                <h1 className="text-darkPurple font-bold">
                  Bookshop.org works to connect readers with independent
                  booksellers all over the world.
                </h1>
                <span>
                  ‍We believe local bookstores are essential community hubs that
                  foster culture, curiosity, and a love of reading, and we're
                  committed to helping them thrive.
                </span>
              </div>
              <p className="text-[1.6rem]">
                <span className="font-bold">
                  Every purchase on the site financially supports independent
                  bookstores.
                </span>
                <span>
                  Our platform gives independent bookstores tools to compete
                  online and financial support to help them maintain their
                  presence in local communities.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-nude">
          <div className="w-main mx-auto my-[5rem]">
            <h1 className="leading-[3.3rem] h-[8rem] text-[2rem] justify-center items-center flex">
              Since 2020, we've raised more than{" "}
              <span className="text-[5rem] font-read mx-4">
                $<span className="font-vollkorm">25</span> million
              </span>{" "}
              for independent bookstores.
            </h1>
          </div>
        </div>
        <div className="w-main mx-auto flex text-center justify-center items-center">
          <div className="flex flex-col">
            <div className="flex flex-col font-semibold font-read mt-[6.4rem] mb-4">
              <h1 className="text-[5rem] text-center">How It Works</h1>
              <p className="text-[2.4rem]">
                (and how your purchases help bookstores)
              </p>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 ">
              <div className="mr-8 flex flex-col w-[20rem]">
                <Image
                  className="h-[20rem]"
                  src={`/about1.png`}
                  width={200}
                  height={1}
                  alt="image"
                />
                <h1 className="text-4xl font-read font-semibold">
                  Pick A Store
                </h1>
                <p className="text-[1.6rem]">
                  Visit our{" "}
                  <Link
                    href={`#`}
                    className="text-purple border-b border-[#6B0DDE]"
                  >
                    find a local bookstore page
                  </Link>{" "}
                  and{" "}
                  <span className="font-semibold">
                    select the bookstore you'd like to support.
                  </span>
                  If you don't choose a store, you'll contribute to our profit
                  sharing pool that helps all our stores.
                </p>
              </div>
              <div className="mr-8 flex flex-col w-[20rem]">
                <Image
                  className="h-[20rem]"
                  src={`/about2.png`}
                  width={200}
                  height={1}
                  alt="image"
                />
                <h1 className="text-4xl font-read font-semibold">Buy a Book</h1>
                <p className="text-[1.6rem]">
                  Your order will be{" "}
                  <span className="font-semibold">
                    {" "}
                    filled directly by our distributor,
                  </span>{" "}
                  and the full profit from your purchase will be sent to
                  bookstore you selected.
                </p>
              </div>
              <div className="mr-8 flex flex-col w-[20rem]">
                <Image
                  className="h-[20rem]"
                  src={`/about3.png`}
                  width={200}
                  height={1}
                  alt="image"
                />
                <h1 className="text-4xl font-read font-semibold">
                  Check the Mail
                </h1>
                <p className="text-[1.6rem]">
                  You'll receive a confirmation and tracking number when your
                  order is placed, and our{" "}
                  <span className="font-semibold">
                    {" "}
                    in-house customer service team
                  </span>{" "}
                  will be standing by if you have issues or returns.
                </p>
              </div>
              <div className="flex flex-col w-[20rem]">
                <Image
                  src={`/about4.gif`}
                  width={128}
                  height={1}
                  alt="image"
                  className="h-[20rem]"
                />
                <h1 className="text-4xl font-read font-semibold mt-2">
                  Help Bookstores
                </h1>
                <p className="text-[1.6rem]">
                  <span className="font-semibold">
                    We donate profits directly to bookstores—both
                  </span>{" "}
                  the funds from direct purchases and our profit pool that's
                  split between our 1,600+ stores.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-nude w-full">
          <div className="grid grid-cols-3 gap-12 w-4/5 mx-auto py-12">
            {booksStore.map((el) => (
              <div key={el.id}>
                <p className="text-[2.2rem] text-center mb-[5.4rem]">
                  {el.desc}
                </p>
                <div className="text-center text-[1.5rem]">
                  <h1 className="text-[2.3rem] font-read font-semibold">
                    {el.name}
                  </h1>
                  <p className=" font-bold">{el.sub}</p>
                  <p className="">{el.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-main mx-auto text-center">
          <h1 className="text-[5rem] font-read font-semibold">Our Mission</h1>
          <p className="text-3xl font-semibold">‍(and where our profits go)</p>
          <div className="flex mt-8 flex-col">
            <div className="flex">
              <Image
                src={`/about5.png`}
                width={400}
                height={400}
                alt="image"
                className="basis-6/12 p-24"
              />
              <div className="basis-6/12 text-start text-[2.3rem]">
                <p className="mt-8">
                  Our mission is simple: To help local, independent bookstores
                  thrive in the age of ecommerce.
                </p>
                <p className="mt-8">
                  <span className="font-bold">Certified as a B Corp,</span>{" "}
                  Bookshop.org puts this mission and the public good above
                  financial interests, giving over 80% of our profit margin to
                  independent bookstores. In 2022, B-Labs announced we were
                  "best for the world": in the top 5% of all B-Corps.
                </p>

                <p className="mt-8">
                  It is written in our governance documents that we will never
                  sell the company to Amazon or any major U.S. retailer.
                </p>
                <p className="mt-8">
                  As a Climate Neutral company, we are committed to operating
                  sustainably.
                </p>
              </div>
            </div>
            <div className="flex">
              <Image
                src={"/about6.png"}
                height={141}
                width={280}
                alt="image"
                className="basis-6/12 p-24"
              />
              <div className="text-[1.6rem] basis-6/12 py-20 text-start">
                <p>
                  <span className="font-bold">B Corp Certification</span> is a
                  designation that a business is meeting high standards of
                  verified performance, accountability, and transparency on
                  factors from employee benefits and charitable giving to supply
                  chain practices and input materials.
                </p>
                <div className="mt-10 ">
                  <a href="#about-us" className="px-4 py-2 bg-nude font-bold">
                    More Information on B Corps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-nude">
          <div className="w-4/5 mx-auto flex flex-col py-20 gap-12">
            <div className="flex justify-between">
              <Image src={"/about9.png"} width={231} height={108} alt="image" />
              <Image src={"/about7.png"} width={231} height={108} alt="image" />
              <Image src={"/about8.png"} width={231} height={108} alt="image" />
            </div>
            <p className="font-bold text-[1.6rem] text-center cursor-pointer">
              Bookshop.org has the highest customer service rating of any online
              bookstore in the world on{" "}
              <span className="text-purple border-b border-[#6B0DDE]">
                Trustpilot.
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-main mx-auto">
          <div className="flex justify-center">
            <Image src={`/about10.png`} width={500} height={281} alt="image" />
          </div>
          <div>
            <h1 className="text-center text-[5rem] font-read font-bold my-8">
              Our History
            </h1>
            <div className="flex flex-col gap-8 text-[2.2rem] w-4/5 mx-auto">
              <p>
                Bookshop.org began as an idea to help support bookstores and
                their communities as more and more people are buying their books
                online. We saw an opportunity to create an alternative to Amazon
                for socially-conscious online shoppers. Amazon sells over 60% of
                all books in the US and is growing. That shift threatens the
                future of bookstores and will hurt readers, authors, and
                publishers who rely on a diverse, healthy ecosystem for books.{" "}
                <span className="font-bold">
                  {" "}
                  We had a better idea — give readers the convenience of online
                  shopping while supporting independent bookstores at the same
                  time.
                </span>
              </p>
              <p>
                ‍We launched in January of 2020, with just 88 bookstore partners
                and a team of four passionate book people.
              </p>
              <p>
                As the COVID-19 pandemic surged, our growing platform helped our
                community of independent booksellers survive shutdowns. That
                spring, traffic to Bookshop.org hit 1 million users in a single
                day. By the end of 2020 we had grown to over 1,000 bookstores
                and distributed over ten million dollars in profits.
                Bookshop.org has since expanded internationally, launching in
                the UK and Spain.
              </p>
              <p>
                78% of our customers said they regularly bought books from
                Amazon before they made the switch.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-nude">
          <div className="w-4/5 mx-auto grid grid-cols-5 p-20 grid-rows-2 gap-12">
            <div className=" row-span-2 col-span-2">
              <p className="text-center text-2xl text-[2rem] font-read">
                “The rapid rise of Bookshop.org during the shutdown has been
                hailed as a boon for independent stores.“
              </p>
              <div className="flex justify-center">
                <Image
                  src={"/font4.png"}
                  width={264}
                  height={48}
                  alt=""
                  className="p-10"
                />
              </div>
            </div>
            {imageFont.map((el) => (
              <Image
                src={el.path}
                key={el.id}
                alt={el.alt}
                height={48}
                width={264}
              />
            ))}
          </div>
        </div>
        <div className="w-main mx-auto">
          <div className="w-3/5 mx-auto">
            <div className="rounded-full bg-gray flex justify-center items-center px-16 py-4">
              <Image src={`/click.png`} height={125} width={130} alt="image" />
              <p className="text-[1.8rem] decoration-2 underline text-purple cursor-pointer">
                Best Practices on How to Link to Books or Use Bookshop.org
                Widgets on Your Site
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-center text-[5rem] font-bold font-read my-12">
              F.A.Q.
            </h1>
            <div>
              {FQ.map((el, index) => (
                <Accordion data={el} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-nude">
          <div className="w-main mx-auto flex items-center justify-center p-20 flex-col gap-8">
            <h1 className="font-read font-semibold text-[2.5rem]">
              “Consider [Bookshop.org] the Rebel Alliance standing up to the
              Amazon Empire.”
            </h1>
            <div>
              <Image src={`/font8.png`} width={193} height={37} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-main mx-auto mt-10">
        <div className="flex justify-between border-b py-8">
          <FontAwesomeIcon
            className="text-white bg-[#79C5B2] text-[2rem] p-4 rounded-full cursor-pointer"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="text-white bg-[#79C5B2] text-[2rem] p-4 rounded-full cursor-pointer"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="text-white bg-[#79C5B2] text-[2rem] p-4 rounded-full cursor-pointer"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="text-white bg-[#79C5B2] text-[2rem] p-4 rounded-full cursor-pointer"
            icon={faTiktok}
          />
        </div>
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex justify-center gap-x-4 mt-6 text-xl">
            <Link href={`/${path.PRIVATE_NOTICE}`}>privacy policy</Link>
            <div>|</div>
            <Link href={`/${path.TERMS_OF_USE}`}>terms of use</Link>
          </div>
          <div className="text-center text-xl">
            © 2023 Bookshop.org. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
