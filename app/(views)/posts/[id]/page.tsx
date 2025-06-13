import { getPost } from '@/services/posts'
import React from 'react'

type Props = {
  params: { id: string };
};

async function SinglePost({params}: Props) {
    const { id } = await params;
    const post = await getPost(id);
    return (
    <div>
        <h2>{post?.title}</h2>
        <p>{post?.content}</p>
    </div>
  )
}

export default SinglePost