export interface ITabItem {
  status: 'default' | 'active';
  text: string;
}

export interface ICard {
  title: string;
  image: string;
  date: string;
  link: string;
  type?: 'xs';
}

export interface IBigCardProps {
  icon: 'img' | 'video';
  image: string;
  title: string;
  text: string;
  author: string;
  author_icon: string;
  date: string;
  count: number;
  link: string;
  tags: string[];
}

export interface ICardDestination {
  title: string;
  image: string;
  link: string;
}

export interface IMediumCardProps {
  image: string;
  title: string;
  text: string;
  date: string;
  link: string;
}

export interface IBreadcrumb {
  name: string;
  path: string;
}
