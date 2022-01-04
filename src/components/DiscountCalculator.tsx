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
      <h4>Cart</h4>
      <div>
        {selected.map((shirt, index) => (
          <div key={index}>
            <Shirt shirtType={shirt} />
          </div>
        ))}
      </div>
      <h3>Total Price</h3>
      <div data-testid="result">{calculateDiscount(selected)}</div>
    </div>
  );
};

export default DiscountCalculator;
