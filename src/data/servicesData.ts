export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'crypto-refunds',
    title: 'Crypto Refunds',
    iconName: 'ShieldCheck',
    shortDesc: 'We offer support to individuals seeking to regain access to misplaced or inaccessible cryptocurrency assets.',
    fullDesc: 'Navigating inaccessible or misplaced cryptocurrency assets requires technical precision and administrative expertise. Our team assists clients in identifying potential avenues for access restoration within practical and legal parameters.',
    features: ['Wallet Access Assessment', 'Lost Key Troubleshooting', 'Administrative Tracking', 'Case Documentation']
  },
  {
    id: 'scam-recovery',
    title: 'Scam Recovery',
    iconName: 'RefreshCw',
    shortDesc: 'We review available transaction data and evaluate suitable methods to support asset recovery efforts, ensuring all actions remain within practical and legal frameworks.',
    fullDesc: 'Investment and cryptocurrency fraud can leave victims feeling isolated. We conduct thorough reviews of transaction signatures, communication records, and platform details to build actionable recovery pathways.',
    features: ['Transaction Audit', 'Platform Risk Mapping', 'Evidentiary Compilation', 'Authority Cooperation']
  },
  {
    id: 'expert-advice',
    title: 'Expert Advice',
    iconName: 'Scale',
    shortDesc: 'Our team assesses each case individually and works within established technical and administrative processes to explore possible recovery options.',
    fullDesc: 'Every fraud case possesses unique attributes. We provide tailored consultative guidance, clarifying realistic outcomes, legal boundaries, and strategic next steps.',
    features: ['Individual Case Reviews', 'Realistic Feasibility Scoring', 'Strategic Advisory', 'Legal Context Clarification']
  },
  {
    id: 'blockchain-analysis',
    title: 'Blockchain Analysis',
    iconName: 'Network',
    shortDesc: 'We apply established blockchain analysis techniques and specialized tools to trace transaction activity where possible.',
    fullDesc: 'Utilizing advanced blockchain forensic tools, we map token flows across public ledgers, tracing movement through wallets, mixers, and exchange endpoints.',
    features: ['On-Chain Flow Mapping', 'Clustered Address Identification', 'Exchange Endpoint Tagging', 'Forensic Reporting']
  },
  {
    id: 'client-support',
    title: 'Client Support',
    iconName: 'Headphones',
    shortDesc: 'Our dedicated support team is available to answer any queries you may have, providing reassurance and clarity throughout your journey.',
    fullDesc: 'Clear, transparent communication is vital during recovery efforts. Our support representatives keep clients updated at every major milestone.',
    features: ['24/7 Priority Channel', 'Milestone Notifications', 'Transparent Communication', 'Compassionate Guidance']
  },
  {
    id: 'educational-resources',
    title: 'Educational Resources',
    iconName: 'BookOpen',
    shortDesc: 'We offer resources and articles to educate clients on how to protect themselves against scams in the future.',
    fullDesc: 'Empowering clients through knowledge is key to long-term digital asset security. Access our guides on cold storage, phishing prevention, and smart contract safety.',
    features: ['Scam Red Flag Guides', 'Wallet Security Checklists', 'Phishing Awareness Training', 'Regulatory Updates']
  }
];
