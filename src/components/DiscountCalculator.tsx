import { FC, useState } from "react";
import Shirt from "./Shirt";
import calculateDiscount from "../functions/calculateDiscount";

const DiscountCalculator: FC = () => {
  const [selected, setSelected] = useState<number[]>([]);

  function handleOnClick(shirtType: number): void {
    setSelected([...selected, shirtType]);
  }

  return (
    <div>
      <h3>Shop</h3>
      <div className="shop-container">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            className="shirt-item"
            key={index}
            onClick={() => handleOnClick(item)}
            data-testid={`shirt-${item}`}
          >
            <Shirt shirtType={item} />
          </div>
        ))}
      </div>
      <h4>Cart</h4>
      <div className="cart-container">
        {selected.map((shirt, index) => (
          <div className="shirt-item" key={index}>
            <Shirt shirtType={shirt} />
          </div>
        ))}
      </div>
      <h3>Total Price</h3>
      <div data-testid="result">{calculateDiscount(selected).toFixed(2)}</div>
    </div>
  );
};

export default DiscountCalculator;
