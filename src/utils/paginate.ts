import { IBooks } from "../types/types";

export const paginate = (
  items: IBooks[],
  pageNumber: number,
  pageSize: number
): IBooks[] => {
  const startIndex = (pageNumber - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
};
