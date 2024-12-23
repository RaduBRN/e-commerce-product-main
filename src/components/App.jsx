import { useState } from "react";
import Navbar from "./Navbar";
import Section from "./Section";

function App() {
  const [orderQuantity, setOrderQuantity] = useState(0);

  const originalPrice = 250;
  const discountPercentage = 50;
  const finalPrice = originalPrice - (originalPrice * discountPercentage) / 100;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main className="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] mx-auto font-kumbh">
      <Navbar
        orderQuantity={orderQuantity}
        setOrderQuantity={setOrderQuantity}
        finalPrice={finalPrice}
        formatter={formatter}
      />
      <Section
        orderQuantity={orderQuantity}
        setOrderQuantity={setOrderQuantity}
        originalPrice={formatter.format(originalPrice)}
        discountPercentage={discountPercentage}
        finalPrice={formatter.format(finalPrice)}
      />
    </main>
  );
}

export default App;
