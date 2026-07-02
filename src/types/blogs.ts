export interface BlogPost {
  img: string;
  title: string;
  body: string;
  hoverBody: string;
}

export interface BlogCardProps {
  post: BlogPost;
}
