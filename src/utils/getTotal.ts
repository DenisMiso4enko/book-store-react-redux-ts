import { IBooks } from "../types/types";

export const getTotal = (arg: IBooks[]): string => {
  let totalQuantity = 0;
  let totalPrice = 0;
  arg.forEach((item) => {
    totalQuantity += item.count;
    // @ts-ignore
    totalPrice += item.price.replace(/[\$]/g, "") * item.count;
  });
  return totalPrice.toFixed(2);
};
