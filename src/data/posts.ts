export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  publishDate: string;
  readingTime: number;
  slug: string;
}

export const posts: Post[] = [];
