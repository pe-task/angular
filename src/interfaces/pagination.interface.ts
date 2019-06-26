export interface PaginationInterface<T> {
  data: T[];
  total_pages: number;
  per_page: number;
  total: number;
  page: number;
}
