import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Page: FC = ({ }) => {
  return <>
    <div className="raised-banner">
      <Link href="">
        <span>{"$26,658,048.13"}</span>
        {"raised for local bookstores"}
      </Link>
    </div>

    <div className="banner" id="banner">
      <div className="flex h-full justify-center flex-col">
        <h1 className="">
          {"Become an Affiliate"}
        </h1>
        <p className="">
          {"Become an affiliate and earn an industry-leading 10% whenever someone buys a book you share. Please note that your account will need to go through a brief verification process in order for us to onboard your store. We will email you throughout this process to let you know the status of your page."}
        </p>
        <Link href="" className="inline-block button primary">
          {"JOIN THE AFFILIATE PROGRAM"}
        </Link>
      </div>
    </div>

    <section className="grid gap-4 text-center grid-cols-3">

    </section>
  </>;
};

export default Page;
