// app/posts/[postId]/comments/page.tsx
import axios from "axios";

type Comment = { id: number; name: string; body: string };

export default async function CommentsPage({ params }: { params: { postId: string } }) {
  const res = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
  );
  const comments = res.data;

  return (
    <div>
      <h1>Comments for Post {params.postId}</h1>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong>: {c.body}
          </li>
        ))}
      </ul>
    </div>
  );
}