import { uniqueArray, removeArrayItemOnce } from "./helperFunctions";

//Check if an array has a certain set of unique values
const checkCombo = (length: number, cart: number[]): boolean => {
  let uniqueCart: number[] = uniqueArray<number>(cart);
  return uniqueCart.length >= length ? true : false;
};
//

//Main function that calculates total discounted price
const calculateDiscount = (cart: number[]): number => {
  let price: number = 8;
  let totalCombos: number[] = [];
  let totalPrice: number = 0;

  let currentCart: number[] = cart;
  if (currentCart.length % 8 === 0) {//If cart lengths has more than 8 items, it will prioritize combo 4 checks.
    while (uniqueArray<number>(currentCart).length >= 4) {
      //Checks whether or not the cart has 4 combos
      if (checkCombo(4, currentCart)) {
        totalCombos.push(4);
        let uniqueShirts: number[] = uniqueArray<number>(currentCart).slice(
          0,
          4
        );
        uniqueShirts.forEach((shirt: number) => {
          currentCart = removeArrayItemOnce(currentCart, shirt);
        });
      }
    }
  }

  while (uniqueArray<number>(currentCart).length >= 5) {
    //Checks whether or not the cart has 5 combos
    if (checkCombo(5, currentCart)) {
      totalCombos.push(5);
      let uniqueShirts: number[] = uniqueArray<number>(currentCart).slice(0, 5);
      uniqueShirts.forEach((shirt: number) => {
        currentCart = removeArrayItemOnce(currentCart, shirt);
      });
    }
  }

  while (uniqueArray<number>(currentCart).length >= 4) {
    //Checks whether or not the cart has 4 combos
    if (checkCombo(4, currentCart)) {
      totalCombos.push(4);
      let uniqueShirts: number[] = uniqueArray<number>(currentCart).slice(0, 4);
      uniqueShirts.forEach((shirt: number) => {
        currentCart = removeArrayItemOnce(currentCart, shirt);
      });
    }
  }

  while (uniqueArray<number>(currentCart).length >= 3) {
    //Checks whether or not the cart has 3 combos
    if (checkCombo(3, currentCart)) {
      totalCombos.push(3);
      let uniqueShirts: number[] = uniqueArray<number>(currentCart).slice(0, 3);
      uniqueShirts.forEach((shirt: number) => {
        currentCart = removeArrayItemOnce(currentCart, shirt);
      });
    }
  }

  while (uniqueArray<number>(currentCart).length >= 2) {
    //Checks whether or not the cart has 5 combos
    if (checkCombo(2, currentCart)) {
      totalCombos.push(2);
      let uniqueShirts: number[] = uniqueArray<number>(currentCart).slice(0, 2);
      uniqueShirts.forEach((shirt: number) => {
        currentCart = removeArrayItemOnce(currentCart, shirt);
      });
    }
  }

  totalCombos.forEach((combo: number) => {
    switch (combo) {
      case 5:
        totalPrice = totalPrice + ((price * 75) / 100) * combo;
        break;
      case 4:
        totalPrice = totalPrice + ((price * 80) / 100) * combo;
        break;
      case 3:
        totalPrice = totalPrice + ((price * 90) / 100) * combo;
        break;
      case 2:
        totalPrice = totalPrice + ((price * 95) / 100) * combo;
        break;
    }
  });

  currentCart.forEach((item: number) => {
    totalPrice += price;
  });
  return totalPrice;
};
//
export default calculateDiscount;
