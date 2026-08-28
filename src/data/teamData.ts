export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  quote: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'michael-hier',
    name: 'Michael Hier',
    role: 'General Counsel - Refund Authority',
    image: '/assets/micheal_heir.webp',
    bio: 'Over the past year, we have enhanced our efforts to help prevent cryptocurrency fraud and support those affected in seeking resolution. As the digital asset landscape continues to evolve, our focus remains on consumer protection, accountability, and assisting individuals in navigating the aftermath of fraudulent activity.',
    quote: 'Over the past year, we have enhanced our efforts to help prevent cryptocurrency fraud and support those affected in seeking resolution.'
  },
  {
    id: 'sophie-leblanc',
    name: 'Sophie Leblanc',
    role: 'Blockchain Investigator - Refund Authority',
    image: '/assets/sophi_leblanc.webp',
    bio: 'The rise of cryptocurrency scams has made our work more important than ever. This past year, we have concentrated on prevention, victim support, and improving the refund process so people affected by fraud are not left to navigate these challenges alone.',
    quote: 'The rise of cryptocurrency scams has made our work more important than ever.'
  }
];
