export interface Page {
  offset: number;
  limit: number;
}

export const DEFAULT_PATE: Page = {
  offset: 0,
  limit: 10,
}