import PageLayout from "@/components/layout/PageLayout";
import ProfileSidebar from "@/components/sections/home/ProfileSidebar";
import SosmedStories from "@/components/sections/home/SosmedStories";
import CreatePost from "@/components/sections/home/CreatePost";
import PostFeed from "@/components/sections/home/PostFeed";
import RightPanel from "@/components/sections/home/RightPanel";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-4 xl:gap-6 max-w-[1400px] mx-auto">
        <aside className="hidden lg:block space-y-4">
          <ProfileSidebar />
          <SosmedStories />
        </aside>

        <section className="min-w-0 space-y-4">
          <CreatePost />
          <PostFeed />
        </section>

        <aside className="hidden lg:block">
          <RightPanel />
        </aside>
      </div>
    </PageLayout>
  );
}
