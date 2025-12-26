
import { Tutorial, LeaderboardEntry, SkillMetric } from './types';

export const MOCK_USER = {
  name: "Alex",
  points: 1500,
  ranking: 42
};

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: "SenseiVFX", points: 9800, badge: "Dragon Master" },
  { rank: 2, name: "DragonFan99", points: 8500, badge: "VFX Wizard" },
  { rank: 3, name: "ShadowKicker", points: 7200, badge: "Bounty Hunter" },
  { rank: 42, name: "Alex (You)", points: 1500, badge: "Rising Dragon" },
];

export const MOCK_TUTORIALS: Tutorial[] = [
  { id: 1, title: "Particle Effects 101", duration: "10m", difficulty: 'Beginner', thumbnail: "https://picsum.photos/seed/fx1/300/200", completed: false },
  { id: 2, title: "Fire Kick Basics", duration: "15m", difficulty: 'Intermediate', thumbnail: "https://picsum.photos/seed/fx2/300/200", completed: false },
  { id: 3, title: "Ancient Temple Lighting", duration: "25m", difficulty: 'Master', thumbnail: "https://picsum.photos/seed/fx3/300/200", completed: false },
  { id: 4, title: "Energy Shield VFX", duration: "12m", difficulty: 'Intermediate', thumbnail: "https://picsum.photos/seed/fx4/300/200", completed: false },
];

export const SKILL_DATA: SkillMetric[] = [
  { subject: 'Power', A: 120, fullMark: 150 },
  { subject: 'VFX', A: 98, fullMark: 150 },
  { subject: 'Agility', A: 86, fullMark: 150 },
  { subject: 'Form', A: 99, fullMark: 150 },
  { subject: 'Spirit', A: 85, fullMark: 150 },
];

export const MASTERS = ["Master Ken", "Shadow Grandmaster", "Fire Lotus", "Iron Dragon", "Mystic VFX"];
