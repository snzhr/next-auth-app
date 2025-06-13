import { IComment } from "./comment";
import { IUser } from "./user";

export interface IPost {
  id?: string;
  title: string;
  content: string;
  author: IUser;
  authorId: string;
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
}
