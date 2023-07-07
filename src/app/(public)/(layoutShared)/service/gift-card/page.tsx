import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import giftcardImg from "../../../../../../public/gift-card.webp";

const Page: FC = ({ }) => {
  const termList = [
    {
      id: 1,
      content: "If you purchase a gift card from a specific store or affiliate on Bookshop, the recipient will be sent to the same store on our site when they click the link to redeem the card, so the store will get credit for any purchases made. However, it is possible for a customer to change to a different shop affiliation if they want to spread their purchases around--the card is like cash, and can be spent how the recipient wants."
    },
    {
      id: 2,
      content: "Bookshop Gift Cards are only accepted at",
      link: "https://bookshop.org/",
      fontStyle: "font-bold",
    },
    {
      id: 3,
      content: "You can choose a value from $10-$1,000."
    },
    {
      id: 4,
      content: "All gift cards are digital only and must be sent to a valid email address."
    },
    {
      id: 5,
      content: "For a personalized touch, include the recipient's name and a personal message on the gift card form. This will appear in the email they receive with the redemption code and link."
    },
    {
      id: 6,
      content: "If you want the card delivered on a specific day, for example the recipient's birthday, enter the date in our order form and we'll send it to them in the morning of that day."
    },
    {
      id: 7,
      content: "Bookshop Gift Cards never expire and have no hidden fees."
    },
  ];

  const amountList = [{ id: 1, amout: "$10" }, { id: 2, amout: "$15" }, { id: 3, amout: "$25" }, { id: 4, amout: "$50" }, { id: 5, amout: "$100" }, { id: 6, amout: "$250" }, { id: 7, amout: "$500" }, { id: 8, amout: "$1000" },];

  return (
    <>
      {/* Raised Banner */}
      <div className="raised-banner text-center flex justify-center items-center my-[1rem] border-b">
        <Link href="" className="text-[1.8rem]">
          <span className="text-[#573BA2] text-4xl font-bold mr-[0.5rem]">
            {"$26,658,048.13"}
          </span>
          {"raised for local bookstores"}
        </Link>
      </div>

      {/* Bookshop */}
      <div className="bookshop w-[70%] mx-auto mb-10" id="bookshop">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold my-16">
            {"Bookshop Gift Cards"}
          </h1>
          <p className="text-[1.8rem] w-4/5">
            {"Bookshop digital gift cards are the perfect gift for any avid reader. The card value is added to the recipient's Bookshop account as credit, and never expires. Bookshop digital gift cards can only be redeemed online on Bookshop.org"}
          </p>
        </div>
        <section className="flex justify-between mt-20">
          <div className="w-[45%]">
            <Image src={giftcardImg} alt="Gift Card Image" />
            <ul className="term-list mt-10">
              {termList.map((termItem: any, index: number) => (
                <li key={index} className="text-[1.8rem] mb-10 list-item list-disc">
                  <p style={{ fontStyle: `${termItem.fontStyle}` }}>{termItem.content}</p>
                  <Link href="" className="font-bold text-[#3078BA] underline">
                    {termItem.link}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="" className="font-bold text-[#3078BA] underline text-[1.8rem]">
              {"View the Terms of Service"}
            </Link>
            <p className="font-bold text-[1.8rem] mt-10">
              {"To purchase multiple gift cards please add them one at a time to your cart."}
            </p>
          </div>
          <div className="w-[45%]">
            <form className="gift_card_order_form">
              <fieldset>
                <div className="flex justify-between">
                  <div className="w-[48%] text-[1.8rem]">
                    <label>{"To *"}</label>
                    <input required className="w-full bg-[#F6F5F7] outline-none px-6 py-4 border-2 border-[#E8E8EA] rounded-xl text-[1.6rem]" id="order_gift_card_requirent_email" type="name" name="order[gift_card_recipient_email]" placeholder="Recipients Email" title="Missing a valid email domain"
                    />
                  </div>
                  <div className="w-[48%] text-[1.8rem]">
                    <label>{"From *"}</label>
                    <input required className="w-full bg-[#F6F5F7] outline-none px-6 py-4 border-2 border-[#E8E8EA] rounded-xl text-[1.6rem]" id="order_gift_card_sender_email" type="name" name="order[gift_card_sender_email]" placeholder="Your Email" title="Missing a valid email domain"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <label className="text-[1.8rem]">{"Choose An Amount*"}</label>
                  <ul className="flex flex-wrap mt-4">
                    {amountList.map((amoutIem: any, index: number) => (
                      <li key={index} className="text-[2rem] font-bold mr-8 mb-6 flex items-center">
                        <input type="radio" required className={`w-[2.5rem] h-[2.5rem] !rounded-full relative before:content-[""] before:block before:absolute before:w-[2.6rem] before:h-[2.6rem] before:t-0 before:l-0 before:bg-white checked:before:bg-[#5F44A7] before:border-2 before:border-[#5F44A7] before:rounded-[0.3rem] checked:after:content-[""] checked:after:block checked:after:absolute checked:after:w-[0.6rem] checked:after:h-[1.4rem] checked:after:border checked:after:border-white checked:after:border-r-2 checked:after:border-b-2 checked:after:border-t-0 checked:after:border-l-0 checked:after:top-[0.3rem] checked:after:left-[1rem] checked:after:rotate-45 checked:after:hover:border-white checked:after:duration-100`} name="order[variant_id]" id={amoutIem.id} />
                        <label htmlFor={amoutIem.id} className="text-[#5F44A7] pl-4">{amoutIem.amout}</label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <label className="text-[1.8rem] block">{"Add A Message"}</label>
                  <textarea placeholder="0/250" maxLength={250} className="border-2 border-[#E8E8EA] bg-[#F6F5F7] rounded-xl w-full outline-none text-[1.6rem] p-6 mt-4" id="order_gift_card_message"></textarea>
                </div>
                <div className="mt-10">
                  <label className="text-[1.8rem] block">{"SendDate"}</label>
                  <input type="date" className="border-2 border-[#E8E8EA] bg-[#F6F5F7] rounded-xl w-full outline-none text-[1.6rem] p-6 mt-4" />
                </div>
                <button className="text-[1.6rem] font-bold text-white bg-[#DE2454] rounded-full w-full py-4 mt-20 hover:bg-[#333] hover:scale-105 duration-300">{"ADD TO CART"}</button>
              </fieldset>
            </form>
            <form className="gift_card_redeem_form mt-[10rem]">
              <h1 className="text-5xl font-bold mb-6">{"Already have a gift card?"}</h1>
              <label className="text-[1.6rem]">{"Redeem your code here:"}</label>
              <fieldset className="bg-[#EAE9ED] p-10 mt-6">
                <label className="text-[1.8rem]">{"Enter Your Code"}</label>
                <div className="flex mt-6">
                  <input placeholder="Code #" required type="text" id="gidt_card_code" name="gift_card[code]" className="w-3/5 outline-none rounded-xl text-[1.6rem] px-6" />
                  <button className="text-[1.6rem] font-bold text-white bg-[#DE2454] rounded-full py-4 px-8 ml-8 hover:bg-[#333] hover:scale-105 duration-300">{"REDEEM"}</button>
                </div>
                <p className="text-[1.6rem] text-[#8B868D] mt-10">{"This amount will be added to your store credit."}</p>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
