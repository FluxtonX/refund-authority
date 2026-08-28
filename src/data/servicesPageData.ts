export interface TestimonialItem {
  id: string;
  quote: string;
  avatar: string;
}

export const servicesTestimonials: TestimonialItem[] = [
  {
    id: 't1',
    quote: "”I lost over $40,000 in Bitcoin to a fake trading platform. I didn't know where to turn. Refund Authority took my case and I didn't pay a cent until the money was back in my wallet. Legit service.”",
    avatar: '/assets/282136370_1079271106035244_7143206365515577832_n.webp'
  },
  {
    id: 't2',
    quote: "”Someone hacked my phone and cleaned out my crypto wallet. The team helped me file reports and track where it went. Took a while but they stuck with it. Never asked for money upfront like those other sites.”",
    avatar: '/assets/499915019_122107222844877668_3403372584070680792_n.webp'
  },
  {
    id: 't3',
    quote: "”An exchange froze my account with $8,000 inside and stopped responding to my emails. Refund Authority stepped in, handled the dispute, and got my account unlocked within a month. No upfront fees. No runaround. Just results. Highly recommend.”",
    avatar: '/assets/434271336_10169269309380160_6253314423830175957_n.jpg'
  },
  {
    id: 't4',
    quote: "”I'm not tech savvy at all. When I lost access to my old Bitcoin wallet, I figured the money was gone forever. These guys helped me get back in. They explained everything in plain language and didn't make me feel dumb. Took a few days but they did it. No complaints.”",
    avatar: '/assets/463979656_122093876900590673_3121866563996534628_n.jpg'
  },
  {
    id: 't5',
    quote: "“A friend recommended an investment platform that turned out to be fake. I lost $9,000 before realizing it. Refund Authority took my case and handled everything. No money upfront. They kept me updated and got my funds back in about two months. I'm so relieved.”",
    avatar: '/assets/499749605_122096434700891122_7202492955246881419_n.webp'
  },
  {
    id: 't6',
    quote: "“I had $14,000 stuck on an exchange that stopped answering my support tickets. Refund Authority stepped in and sorted it out. They didn't ask for payment until after my money was returned. Worth it.”",
    avatar: '/assets/117667861_105042027979179_4942395293748801238_n-1.webp'
  },
  {
    id: 't7',
    quote: "“Someone hacked my phone and stole my crypto. I didn't know where to start. Refund Authority helped me file reports and track the transactions. They stayed on it for months and never gave up. Got most of it back.”",
    avatar: '/assets/572231371_122150092928800933_328887272698457859_n.jpg'
  },
  {
    id: 't8',
    quote: "“Met someone online who talked me into a crypto trading site. Put in $7,500 and then couldn't withdraw anything. Refund Authority took over communications and applied pressure. Within weeks I had my money back. Legit service.”",
    avatar: '/assets/490552641_10225868943013787_8475483696646795080_n.webp'
  }
];

export interface ExpertiseCardItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

export const expertiseCards: ExpertiseCardItem[] = [
  {
    id: 'exp-1',
    title: 'Structured Support for Fraud Cases',
    description: 'We assist clients in addressing financial losses resulting from cryptocurrency fraud.',
    buttonText: 'Learn More',
    link: '/contact'
  },
  {
    id: 'exp-2',
    title: 'Case Assessment and Guidance',
    description: 'Our approach is structured to provide thorough case assessment and clear communication, helping to reduce uncertainty throughout the process.',
    buttonText: 'Find Out',
    link: '/contact'
  },
  {
    id: 'exp-3',
    title: 'Romance Scam Recovery',
    description: 'We offer supportive guidance to individuals affected by romance scams involving financial loss.',
    buttonText: 'Get Help',
    link: '/contact'
  },
  {
    id: 'exp-4',
    title: 'Individualized Case Assessment',
    description: 'We assess each situation individually and develop a tailored approach based on the specific circumstances of the case.',
    buttonText: 'Contact Us',
    link: '/contact'
  }
];
