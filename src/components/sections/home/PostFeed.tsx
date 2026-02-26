import PostCard from "./PostCard";
import { FEED_POSTS } from "@/constants/mockData";

export default function PostFeed() {
  return (
    <div className="space-y-4">
      {FEED_POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
