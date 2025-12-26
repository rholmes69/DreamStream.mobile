
export type Page = 'dashboard' | 'arena' | 'dojo' | 'leaderboard';
export type Theme = 'light' | 'dark' | 'system';

export interface User {
  name: string;
  points: number;
  ranking: number;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  badge?: string;
}

export interface Tutorial {
  id: number;
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Master';
  thumbnail: string;
  completed: boolean;
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}

export interface AppState {
  currentPage: Page;
  theme: Theme;
  isSidebarOpen: boolean;
  user: User;
  leaderboard: LeaderboardEntry[];
  tutorials: Tutorial[];
  showRewardOverlay: boolean;
}
