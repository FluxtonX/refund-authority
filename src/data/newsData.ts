export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  summary: string;
  url?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'US, UK and Canada Freeze $12M in Crypto Phishing Operation',
    category: 'Enforcement Alert',
    date: '2026-02-20',
    summary: 'Joint international task force freezes illegal wallet addresses linked to global phishing syndicates targeting retail investors.'
  },
  {
    id: 2,
    title: 'FINTRAC Commences Crypto Fraud Crackdown',
    category: 'Regulatory',
    date: '2026-02-15',
    summary: 'Canada financial intelligence unit implements heightened reporting thresholds for virtual asset service providers to curb money laundering.'
  },
  {
    id: 3,
    title: 'Canadians Lost $704 Million to Fraud in 2025',
    category: 'Statistics',
    date: '2026-02-10',
    summary: 'Annual report highlights investment and cryptocurrency scams as the leading cause of financial loss among victims nationwide.'
  },
  {
    id: 4,
    title: 'Deepfakes and Private Messaging Apps Reshape Investment Fraud Landscape',
    category: 'Warning',
    date: '2026-02-05',
    summary: 'Alberta Securities Commission issues urgent advisory on AI-generated synthetic media used to fabricate celebrity endorsements.'
  },
  {
    id: 5,
    title: 'Canadian Regulators Disarm 7,500+ Fraudulent Investment Sites',
    category: 'Domain Sweep',
    date: '2026-01-28',
    summary: 'Coordinated web domain takedown operation successfully disables malicious spoofed trading platforms across multiple hosts.'
  },
  {
    id: 6,
    title: 'RCMP NC3 & CAFC Launch Maple Disruption 2025',
    category: 'National Defense',
    date: '2026-01-18',
    summary: 'National Cybercrime Coordination Centre initiates multi-agency initiative targeting organized crypto fraud rings.'
  }
];
