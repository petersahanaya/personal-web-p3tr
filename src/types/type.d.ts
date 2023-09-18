export type ReactChildren = {
  children: React.ReactNode;
};

export type ReactChildrenWithClass = {
  className?: string;
} & ReactChildren;

export type ReactWithClassName = {
  className?: string;
};

export type Work = {
  title: string;
  href: string;
  image: string;
  categories: string[];
  description: string;
};

export type FormState = {
  username: string;
  email: string;
  message: string;
};
