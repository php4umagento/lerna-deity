import { Pagination } from "@deity/falcon-data";

export type ReviewList = {
  items: Review[];
  pagination?: Pagination;
};

export type Review = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
