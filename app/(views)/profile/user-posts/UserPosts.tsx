"use client";
import { IPost } from "@/models/post";
import styles from "./UserPosts.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { useModal } from "@/context/modalContext";
import axios from "axios";

function UserPosts({ userPosts }: { userPosts: IPost[] }) {
  const { show, close }: any = useModal();
  let pid: string | null = null;
  const deletePost = async () => {
    if (!pid) {
      return null;
    }
    try {
      await axios.delete(`/api/posts/${pid}`);
    } catch (error) {
      console.log(error);
    } finally {
      pid = null;
    }
  };

  const modalContent = (
    <div>
      Are you sure that you want to delete this post?
      <div className={styles["modal-actions"]}>
        <button className={styles["confirm-btn"]} onClick={deletePost}>
          Confirm
        </button>
        <button className={styles["cancel-btn"]} onClick={close}>
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <h1>My posts</h1>
      <div className={styles["user-post"]}>
        {userPosts.length === 0
          ? "No posts"
          : userPosts.map((post) => {
              return (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <div className={styles.actions}>
                    <button>
                      <Link href={`/posts/${post.id}/edit`}>
                        <MdOutlineEdit />
                      </Link>
                    </button>
                    <button>
                      <Link href="#">
                        <MdDeleteOutline
                          onClick={() => {
                            pid = post.id as string;
                            show(modalContent);
                          }}
                        />
                      </Link>
                    </button>
                    <button>
                      <Link href={`/posts/${post.id}`}>
                        <FaArrowAltCircleRight />
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default UserPosts;
