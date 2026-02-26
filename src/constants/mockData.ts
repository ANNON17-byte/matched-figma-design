import type {
  User,
  Post,
  StoryUser,
  JobStat,
  JobApplication,
  RecommendedJob,
  SuggestionCourse,
} from "@/types";

export const CURRENT_USER: User = {
  id: "u1",
  name: "Minnie Armstrong",
  role: "UI / UX Designer",
  avatar: "/avatars/minnie.jpg",
  profileCompletion: 75,
};

export const DASHBOARD_USER: User = {
  id: "u-julie",
  name: "Julie",
  role: "Product Designer",
  avatar: "/avatars/julie.jpg",
};

export const FEED_POSTS: Post[] = [
  {
    id: "p1",
    author: {
      id: "u2",
      name: "Pan Feng Shui",
      role: "Content Creator",
      avatar: "/avatars/pan.jpg",
    },
    timestamp: "12 April at 09:28 PM",
    content:
      "Had an amazing interaction with the founder of ABC Company, sharing my experience through this small article",
    image: "/posts/meeting.jpg",
    reactions: { likes: 3, comments: 25, shares: 231, saved: 24 },
    reactionIcons: 8,
  },
  {
    id: "p2",
    author: {
      id: "u3",
      name: "Clara Kim",
      role: "Fitness Coach",
      avatar: "/avatars/clara.jpg",
    },
    timestamp: "12 April at 09:28 PM",
    content:
      "A Great Way To Generate All The Motivation You Need To Get Fit.",
    reactions: { likes: 3, comments: 25, shares: 231, saved: 24 },
    reactionIcons: 8,
  },
];

export const STORY_USERS: StoryUser[] = [
  {
    id: "su1",
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar: "/avatars/rakesh.jpg",
    isFollowing: false,
  },
  {
    id: "su2",
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar: "/avatars/rakesh.jpg",
    isFollowing: false,
  },
  {
    id: "su3",
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar: "/avatars/rakesh.jpg",
    isFollowing: false,
  },
];

export const JOB_STATS: JobStat[] = [
  { label: "Active Jobs", count: 3, change: "+5 from yesterday", trend: "up" },
  { label: "Jobs In Progress", count: 3, change: "+5 from yesterday", trend: "up" },
  { label: "Shortlisted", count: 3, change: "+5 from yesterday", trend: "up" },
  { label: "On Hold", count: 3, change: "+5 from yesterday", trend: "up" },
];

export const JOB_APPLICATIONS: JobApplication[] = [
  {
    id: "ja1",
    title: "Jr. Front-end Developer",
    company: "Microsoft",
    companyLogo: "/logos/microsoft.svg",
    appliedOn: "08/08/2023",
    status: "In-progress",
  },
  {
    id: "ja2",
    title: "Senior Back-end Developer",
    company: "Google",
    companyLogo: "/logos/google.svg",
    appliedOn: "24/07/2023",
    status: "Applied",
  },
  {
    id: "ja3",
    title: "UI/UX designer",
    company: "Meta",
    companyLogo: "/logos/meta.svg",
    appliedOn: "01/05/2023",
    status: "Offered",
  },
];

export const RECOMMENDED_JOBS: RecommendedJob[] = [
  {
    id: "rj1",
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    companyLogo: "/logos/syncup.svg",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    trusted: true,
    postedAgo: "14 hrs. ago",
  },
  {
    id: "rj2",
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    companyLogo: "/logos/syncup.svg",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    trusted: true,
    postedAgo: "14 hrs. ago",
  },
  {
    id: "rj3",
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    companyLogo: "/logos/syncup.svg",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    trusted: true,
    postedAgo: "14 hrs. ago",
  },
  {
    id: "rj4",
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    companyLogo: "/logos/syncup.svg",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    trusted: true,
    postedAgo: "14 hrs. ago",
  },
];

export const SUGGESTION_COURSES: SuggestionCourse[] = [
  {
    id: "sc1",
    title: "Figma: Basics",
    instructor: "Tyler Hooks",
    rating: 4.2,
    image: "/courses/figma-basics.jpg",
  },
];

export const VACANCY_CHART_DATA = [
  { month: "Jan", applicationSent: 200, interviews: 80, rejected: 50 },
  { month: "Feb", applicationSent: 350, interviews: 120, rejected: 80 },
  { month: "Mar", applicationSent: 300, interviews: 100, rejected: 70 },
  { month: "Apr", applicationSent: 450, interviews: 150, rejected: 90 },
  { month: "May", applicationSent: 400, interviews: 130, rejected: 110 },
  { month: "Jun", applicationSent: 550, interviews: 170, rejected: 80 },
  { month: "Jul", applicationSent: 600, interviews: 200, rejected: 100 },
  { month: "Aug", applicationSent: 680, interviews: 370, rejected: 120 },
  { month: "Sep", applicationSent: 500, interviews: 250, rejected: 90 },
  { month: "Oct", applicationSent: 450, interviews: 200, rejected: 100 },
  { month: "Nov", applicationSent: 400, interviews: 180, rejected: 110 },
  { month: "Dec", applicationSent: 350, interviews: 150, rejected: 80 },
];

export const CONNECTIONS_CHART_DATA = [
  { month: "Sept", value: 120 },
  { month: "Oct", value: 180 },
  { month: "Nov", value: 150 },
  { month: "Dec", value: 220 },
];
