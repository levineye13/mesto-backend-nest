export interface IUser {
  readonly name: string;
  readonly about: string;
  readonly avatar: string;
}

export interface ICard {
  readonly name: string;
  readonly link: string;
  readonly owner: IUser;
  readonly likes: IUser[];
  readonly createdAt: Date;
}
