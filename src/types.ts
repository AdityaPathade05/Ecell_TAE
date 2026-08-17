export type Department = 
  | 'all'
  | 'leadership'
  | 'heads'
  | 'members'
  | 'advisory'
  | 'tech'
  | 'media'
  | 'operations';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: Department;
  departmentLabel: string;
  bio?: string;
  imageUrl: string;
  initialX?: number;
  initialY?: number;
  tags?: string[];
  socials?: {
    linkedin?: string;
    instagram?: string;
    github?: string;
    email?: string;
  };
  achievements?: string[];
}

export interface Milestone {
  id: number;
  numberStr: string;
  dates: string;
  title: string;
  objective: string[];
  description: string;
  outcome: string[];
  category: string;
  badge: string;
}

export interface Initiative {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Competition' | 'Flagship' | 'Ambassadorship' | 'Workshop';
  features: string[];
  accentColor: 'gold' | 'cyan' | 'blue' | 'purple';
  metrics: string;
  partner?: string;
  status: 'Active' | 'Registration Open' | 'Upcoming' | 'Ongoing';
}

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company: string;
  avatarUrl: string;
  quote: string;
  topic: string;
  tags: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'core-team' | 'charter' | 'meetings' | 'general';
  categoryLabel: string;
  date: string;
  imageUrl: string;
  aspect?: string;
  description: string;
  milestoneRef?: string;
  attendees?: string[];
  location: string;
  featured?: boolean;
}

export interface ReelItem {
  id: string;
  title: string;
  caption: string;
  duration: string;
  thumbnailUrl: string;
  videoPreviewUrl?: string;
  likes: number;
  comments: number;
  views: string;
  audioTitle: string;
  tags: string[];
  category: 'highlight' | 'eureka' | 'ambassador' | 'workshop' | 'pitch' | 'bts';
  date: string;
  instagramUrl: string;
}

export interface InstaPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  type: 'image' | 'carousel' | 'reel';
  tags: string[];
  instagramUrl: string;
  pinned?: boolean;
  bannerSegment?: 'left' | 'center' | 'right';
  bannerTitle?: string;
}

export interface InstaStoryHighlight {
  id: string;
  title: string;
  coverUrl: string;
  stories: {
    id: string;
    mediaUrl: string;
    caption: string;
    date: string;
  }[];
}

export interface MediaAsset {
  id: string;
  title: string;
  type: 'press-release' | 'logo-kit' | 'brochure' | 'report' | 'poster';
  typeLabel: string;
  description: string;
  date: string;
  fileSize: string;
  fileFormat: string;
  previewUrl: string;
  downloadUrl: string;
}

