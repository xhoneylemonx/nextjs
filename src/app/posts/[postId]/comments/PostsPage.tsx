// app/posts/page.tsx
import axios from "axios";

type Post = { id: number; title: string };

export default async function PostsPage() {
  const res = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data.slice(0, 5); // limit to 5 posts

  return (
    <div>
      <h1>Posts (Axios)</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}