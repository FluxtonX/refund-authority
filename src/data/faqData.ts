export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Immediate Action',
    question: 'What should I do if I’ve been scammed?',
    answer: 'If you believe you have been affected by fraudulent activity, we recommend disconnecting your wallet immediately, documenting all transaction IDs and communications, reporting the incident to relevant law enforcement agencies, and reaching out to our team for an initial case assessment.'
  },
  {
    id: 'faq-2',
    category: 'Timeline & Expectations',
    question: 'How long does the recovery evaluation process take?',
    answer: 'The timeline for each case depends on various factors, including its technical complexity, blockchain ledger transparency, and the cooperation of involved exchanges or administrative authorities.'
  },
  {
    id: 'faq-3',
    category: 'Documentation',
    question: 'What documentation is required to submit a case?',
    answer: 'To help us evaluate your case effectively, please provide transaction hash IDs, wallet addresses involved, exchange deposit records, and any communication logs with the fraudulent platform.'
  },
  {
    id: 'faq-4',
    category: 'Jurisdiction',
    question: 'Do you assist clients outside of Canada?',
    answer: 'Although our primary office is based in Canada, we assist clients internationally across North America, Europe, and Asia-Pacific jurisdictions where applicable legal and technical frameworks permit.'
  },
  {
    id: 'faq-5',
    category: 'Scope of Support',
    question: 'What types of crypto and investment fraud do you handle?',
    answer: 'We assist with fake investment platforms, approval phishing, romance scams, unauthorized exchange withdrawals, stolen private keys, and rug-pull protocol collapses.'
  }
];
