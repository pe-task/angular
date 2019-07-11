import { UserInterface } from "./user.interface";

export interface HttpUserInterface {
  data: UserInterface[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
