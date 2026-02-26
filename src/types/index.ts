export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
  profileCompletion?: number;
}

export interface Post {
  id: string;
  author: User;
  timestamp: string;
  content: string;
  image?: string;
  reactions: {
    likes: number;
    comments: number;
    shares: number;
    saved: number;
  };
  reactionIcons?: number;
}

export interface StoryUser extends User {
  isFollowing?: boolean;
}

export interface JobStat {
  label: string;
  count: number;
  change: string;
  trend: "up" | "down" | "neutral";
}

export type ApplicationStatus = "In-progress" | "Applied" | "Offered" | "Rejected" | "Pending";

export interface JobApplication {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  appliedOn: string;
  status: ApplicationStatus;
}

export interface RecommendedJob {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: string;
  rating: number;
  trusted: boolean;
  postedAgo: string;
}

export interface NavItem {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SuggestionCourse {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  image: string;
}
