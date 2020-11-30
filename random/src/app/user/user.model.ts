export interface User {
  id: Id;
  gender: string;
  name: Name;
  picture: Picture;
  email: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture{
  large: string;
  medium: string;
  thumbail: string;
}

export interface Id {
  name: string;
  value: number;
}
