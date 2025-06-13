import { IPost } from "./post";
import { IUser } from "./user";

export interface IComment {
  id: string;
  content: string;
  post: IPost;
  postId: string;
  author: IUser;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}
