import Image from "next/image";
import Avatar from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import type { Post } from "@/types";
import {
  ThumbsUp,
  MessageCircle,
  Smile,
  Share2,
  Bookmark,
  Paperclip,
  Image as ImageIcon,
  MoreHorizontal,
} from "lucide-react";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card padding="none" className="overflow-hidden">
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <Avatar src={post.author.avatar} alt={post.author.name} size="sm" />
            <div>
              <p className="text-sm font-semibold">{post.author.name}</p>
              <p className="text-xs text-text-muted">{post.timestamp}</p>
            </div>
          </div>
          <button className="p-1 rounded hover:bg-gray-100 transition-colors" aria-label="Post options">
            <MoreHorizontal className="h-4 w-4 text-text-muted" />
          </button>
        </div>

        <p className="mt-3 text-sm text-text-primary leading-relaxed">
          {post.content.split("ABC Company").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <strong>ABC Company</strong>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      </div>

      {post.image && (
        <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
          <Image
            src={post.image}
            alt="Post content"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="px-4 py-2.5 flex items-center gap-4 text-xs text-text-secondary border-b border-border">
        <span className="inline-flex items-center gap-1">
          <ThumbsUp className="h-3.5 w-3.5" />
          {post.reactions.likes}
        </span>
        <span className="inline-flex items-center gap-1">
          <Smile className="h-3.5 w-3.5" />
          {post.reactionIcons}
        </span>
        <span className="inline-flex items-center gap-1">
          <Smile className="h-3.5 w-3.5" />
        </span>

        <div className="ml-auto flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5" />
            {post.reactions.comments} Comments
          </span>
          <span className="inline-flex items-center gap-1">
            <Share2 className="h-3.5 w-3.5" />
            {post.reactions.shares} Shares
          </span>
          <span className="inline-flex items-center gap-1">
            <Bookmark className="h-3.5 w-3.5" />
            {post.reactions.saved} Saved
          </span>
        </div>
      </div>

      <div className="p-3 flex items-center gap-3">
        <div className="flex-1 h-8 px-3 rounded-full border border-border bg-gray-50 flex items-center">
          <span className="text-xs text-text-muted">Write your comment...</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Attach file">
            <Paperclip className="h-4 w-4 text-text-muted" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Add emoji">
            <Smile className="h-4 w-4 text-text-muted" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Add image">
            <ImageIcon className="h-4 w-4 text-text-muted" />
          </button>
        </div>
      </div>
    </Card>
  );
}
