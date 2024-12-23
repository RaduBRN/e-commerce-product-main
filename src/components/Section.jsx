import { useState } from "react";

import IconCart from "../icons/IconCart";
import ImageGallery from "./ImageGallery";
import IconMinus from "../icons/IconMinus";
import IconPlus from "../icons/IconPlus";

function Section({
  orderQuantity,
  setOrderQuantity,
  originalPrice,
  discountPercentage,
  finalPrice,
}) {
  const [count, setCount] = useState(0);

  function decreaseQuantity() {
    setCount((prev) => Math.max(prev - 1, 0));
  }

  function increaseQuantity() {
    setCount((prev) => Math.min(prev + 1, 5 - orderQuantity));
  }

  function handleCart() {
    if (orderQuantity < 5) {
      count && setOrderQuantity((prev) => prev + count);
      setCount(0);
    }
  }

  return (
    <section className="flex flex-col lg:flex-row gap-5 lg:gap-20 pb-10 lg:pb-0 py-0 lg:py-10 lg:px-6">
      <div className="lg:min-w-[445px]">
        <ImageGallery />
      </div>
      <div className="flex flex-col gap-5 lg:gap-10 max-w-[445px] w-full justify-center px-5 lg:px-0">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h4 className="text-[12px] lg:text-[13px] font-bold uppercase text-[#69707D] tracking-[1.85px] lg:tracking-[2px]">
            Sneaker Company
          </h4>
          <h2 className="text-[28px] lg:text-[44px] font-bold text-[#1D2026] leading-[32px] lg:leading-[48px]">
            Fall Limited Edition Sneakers
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[15px] lg:text-[16px] text-[#69707D] leading-[25px] lg:leading-[26px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between gap-1">
            <div className="flex items-center gap-4">
              <p className="text-[28px] font-bold">{finalPrice}</p>
              <div className="bg-[#1D2026] w-[51px] h-[27px] flex items-center justify-center rounded-lg">
                <span className="text-[#fff]">{discountPercentage}%</span>
              </div>
            </div>
            <p className="line-through leading-[26px] text-[#69707D] font-bold">
              {originalPrice}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
          <div className="w-full lg:w-[157px] h-[56px] bg-[#F6F8FD] rounded-lg flex items-center justify-between">
            <button className="h-full px-4 group" onClick={decreaseQuantity}>
              <IconMinus />
            </button>
            <span className="font-bold text-[#1D2026]">{count}</span>
            <button className="px-4 h-full group" onClick={increaseQuantity}>
              <IconPlus />
            </button>
          </div>
          <button
            className="drop-shadow-custom bg-[#FF7E1B] hover:bg-[#FFAB6A] w-full lg:w-[272px] h-[56px] flex gap-2 items-center justify-center rounded-lg"
            onClick={handleCart}
          >
            <IconCart width={17} height={16} fill="#1D2026" />
            <span className="font-bold">Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section;
