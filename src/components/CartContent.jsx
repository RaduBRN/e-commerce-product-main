import { data } from "../../static/data";
import IconDelete from "../icons/IconDelete";

function CartContent({
  orderQuantity,
  setOrderQuantity,
  itemPrice,
  formatter,
}) {
  const totalPrice = orderQuantity * itemPrice;

  function resetQuantity() {
    setOrderQuantity(0);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div>
          <img
            src={data.images[0].thumbnail}
            className="w-[50px] h-[50px] rounded"
          />
        </div>
        <div className="flex flex-col text-[#69707D]">
          <div>Fall Limited Edition Sneakers</div>
          <div>
            {formatter.format(itemPrice)} x {orderQuantity}{" "}
            <span className="text-[#1D2026] font-bold">
              {formatter.format(totalPrice)}
            </span>
          </div>
        </div>
        <button className="group" onClick={resetQuantity}>
          <IconDelete />
        </button>
      </div>
      <div>
        <button className="w-[312px] h-[56px] bg-[#FF7E1B] hover:bg-[#FFAB6A] rounded-xl text-[#1D2026] font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartContent;
