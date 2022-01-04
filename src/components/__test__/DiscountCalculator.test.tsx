import DiscountCalculator from "../DiscountCalculator";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId: any;
let resultEl: HTMLElement;
let shirtOneEl: HTMLElement;
let shirtTwoEl: HTMLElement;
let shirtThreeEl: HTMLElement;
let shirtFourEl: HTMLElement;
let shirtFiveEl: HTMLElement;

beforeEach(() => {
  getByTestId = render(<DiscountCalculator />).getByTestId;
  resultEl = getByTestId("result");
  shirtOneEl = getByTestId("shirt-1");
  shirtTwoEl = getByTestId("shirt-2");
  shirtThreeEl = getByTestId("shirt-3");
  shirtFourEl = getByTestId("shirt-4");
  shirtFiveEl = getByTestId("shirt-5");
});

test("Test initial values", () => {
  expect(resultEl.textContent).toBe("0");
});

test("Fire event: Input 1 first shirt, 1 second shirt", () => {
  fireEvent.click(shirtOneEl);
  fireEvent.click(shirtTwoEl);
  expect(resultEl.textContent).toBe("15.2");
});

test("Fire event: Input 1 first shirt, 1 second shirt, 1 third shirt", () => {
  fireEvent.click(shirtOneEl);
  fireEvent.click(shirtTwoEl);
  fireEvent.click(shirtThreeEl);
  expect(resultEl.textContent).toBe("21.6");
});

test("Fire event: Input 1 first shirt, 1 second shirt, 1 third shirt, 1 fourth shirt", () => {
  fireEvent.click(shirtOneEl);
  fireEvent.click(shirtTwoEl);
  fireEvent.click(shirtThreeEl);
  fireEvent.click(shirtFourEl);
  expect(resultEl.textContent).toBe("25.6");
});

test("Fire event: Input 1 first shirt, 1 second shirt, 1 third shirt, 1 fourth shirt, 1 five shirt", () => {
  fireEvent.click(shirtOneEl);
  fireEvent.click(shirtTwoEl);
  fireEvent.click(shirtThreeEl);
  fireEvent.click(shirtFourEl);
  fireEvent.click(shirtFiveEl);
  expect(resultEl.textContent).toBe("30");
});

test("Fire event: Input 2 first shirt, 2 second shirt, 2 third shirt, 1 fourth shirt, 1 fifth shirt", () => {
  fireEvent.click(shirtOneEl);
  fireEvent.click(shirtOneEl);
  fireEvent.click(shirtTwoEl);
  fireEvent.click(shirtTwoEl);
  fireEvent.click(shirtThreeEl);
  fireEvent.click(shirtThreeEl);
  fireEvent.click(shirtFourEl);
  fireEvent.click(shirtFiveEl);
  expect(resultEl.textContent).toBe("51.2");
});
