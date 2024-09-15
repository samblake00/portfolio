export type Blog = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  tags?: string[];
  [key: string]: any;
};
