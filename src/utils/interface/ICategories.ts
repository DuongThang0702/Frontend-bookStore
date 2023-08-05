export interface ICategory {
  data: {
    _id: string;
    createdAt: string;
    slug: string;
    title: string;
    updatedAt: string;
  }[];
  error: number;
}
