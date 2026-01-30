export enum Page {
  START_HERE = 'START_HERE',
  PROCESS = 'PROCESS',
  CASE_STUDIES = 'CASE_STUDIES',
  BOOK_CALL = 'BOOK_CALL'
}

export interface Metric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface DetailedStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string; // The short tag
  tagline: string; // The one liner
  metrics: Metric[]; // For the card
  
  // Detailed Popup Data
  fullTitle?: string;
  location?: string;
  duration?: string;
  challenge?: string[];
  strategy?: string;
  strategyPoints?: { title: string; description: string }[];
  resultsSummary?: string;
  detailedStats?: DetailedStat[];
  keyAchievements?: string[];
  techImprovements?: string[];
  googleAdsData?: { spend: string; calls: string; convRate: string; revenue: string; roas: string };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  hasImage?: boolean;
}

export interface FormData {
  name: string;
  company: string;
  revenue: string;
  spend: string;
  kickoff: string;
}