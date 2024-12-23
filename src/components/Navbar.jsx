import { useState } from "react";
import IconCart from "../icons/IconCart";
import IconMenu from "../icons/IconMenu";
import IconClose from "../icons/IconClose";
import Logo from "../icons/Logo";
import CartContent from "./CartContent";
import { menuLinks } from "../../static/menuLinks";

function Navbar({ orderQuantity, setOrderQuantity, finalPrice, formatter }) {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function toggleCart() {
    setShowCart((prev) => !prev);
  }

  return (
    <header className="flex justify-between items-center border-b border-[#E4E9F2] py-5 lg:py-8 px-5 lg:px-0">
      <div className="flex gap-4 lg:gap-12 items-center">
        <button
          onClick={() => setShowMenu(true)}
          className="block lg:hidden group"
        >
          <IconMenu />
        </button>
        <Logo />
        <div className="hidden lg:flex gap-6 text-[15px] text-[#69707D] leading-6">
          {menuLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative hover:text-[#1D2026]"
            >
              {item.text}
              <div className="hidden group-hover:block absolute h-[3px] left-0 right-0 top-[67px] bg-[#FF7E1B]" />
            </a>
          ))}
        </div>
        {showMenu && (
          <div className="fixed inset-0 bg-black/75 lg:hidden z-50">
            <div className="flex flex-col gap-10 w-[75%] h-full bg-white p-7">
              <button onClick={() => setShowMenu(false)}>
                <IconClose fill="#69707D" />
              </button>
              <div className="flex flex-col gap-5 text-[#1D2026] font-bold">
                {menuLinks.map((item, index) => (
                  <a key={index} href={item.link}>
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-6 lg:gap-12 items-center">
        <div className="relative">
          <div className="relative" onClick={toggleCart}>
            <IconCart />
            {orderQuantity > 0 && (
              <div className="absolute -top-2 -right-1 text-[10px] px-[6px] text-white bg-[#FF7E1B] rounded-lg">
                {orderQuantity}
              </div>
            )}
          </div>
          <div
            className={`absolute right-0 lg:-left-36 top-10 flex-col bg-[#fff] ${
              showCart ? "hidden lg:flex" : "hidden"
            } w-[360px] h-[256px] shadow-md rounded-lg z-[99]`}
          >
            <div className="h-[76px] border-b-2 border-[#E4E9F2] flex flex-col justify-center pl-8">
              <p className="font-bold text-[#1D2026]">Cart</p>
            </div>
            <div className="flex justify-center items-center h-[180px]">
              {orderQuantity > 0 ? (
                <CartContent
                  orderQuantity={orderQuantity}
                  itemPrice={finalPrice}
                  formatter={formatter}
                  setOrderQuantity={setOrderQuantity}
                />
              ) : (
                <p className="font-bold text-[#69707D]">Your cart is empty.</p>
              )}
            </div>
          </div>
        </div>
        <img
          src="/images/image-avatar.png"
          alt="user avatar"
          className="w-[24px] lg:w-[50px] h-[24px] lg:h-[50px] border-2 border-transparent hover:border-[#FF7E1B] rounded-full cursor-pointer"
        />
      </div>
      <div
        className={`absolute left-0 right-0 top-[70px] flex-col bg-[#fff] ${
          showCart ? "flex lg:hidden" : "hidden"
        } w-[calc(100vw-5px)] mx-auto h-[256px] shadow-md rounded-lg z-[99]`}
      >
        <div className="h-[76px] border-b-2 border-[#E4E9F2] flex flex-col justify-center pl-8">
          <p className="font-bold text-[#1D2026]">Cart</p>
        </div>
        <div className="flex justify-center items-center h-[180px]">
          {orderQuantity > 0 ? (
            <CartContent
              orderQuantity={orderQuantity}
              itemPrice={finalPrice}
              formatter={formatter}
              setOrderQuantity={setOrderQuantity}
            />
          ) : (
            <p className="font-bold text-[#69707D]">Your cart is empty.</p>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
