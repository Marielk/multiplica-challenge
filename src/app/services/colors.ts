export interface Colour{
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface DataApi {
  ad: string;
  data: Colour[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}