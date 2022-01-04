import DiscountCalculator from "../DiscountCalculator";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId:any;
let resultEl:HTMLElement;

beforeEach(() => {
  getByTestId = render(<DiscountCalculator />).getByTestId;
  resultEl = getByTestId("result");
});

test("Test initial values", () => {
  expect(resultEl.textContent).toBe("0");
});

test("Fire event: Test 2 first shirt, 2 second shirt, 2 third shirt, 1 fourth shirt, 1 fifth shirt", () => {
  expect(resultEl.textContent).toBe("0");
});
