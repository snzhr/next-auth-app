import { IComment } from "@/models/comment";
import styles from './Comment.module.css';


function Comment({ comment }: { comment: IComment }) {
  return (
    <div className={styles.comment}>
      <div>
        <h3>{comment.author.name}</h3>
        <span>{comment.createdAt.toLocaleDateString("en-US", {})}</span>
      </div>
      <p>{comment.content}</p>
    </div>
  );
}

export default Comment;
