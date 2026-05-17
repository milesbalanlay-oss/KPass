import { Event } from '../types/event.type';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual General Assembly 2026',
    description: 'Join us for the annual general assembly where we review the year\'s achievements, discuss upcoming initiatives, and elect new board members.',
    date: new Date('2026-06-15T09:00:00'),
    location: 'Main Auditorium, HQ Building',
    facilitator: 'Maria Santos',
    inviteOnly: false,
  },
  {
    id: '2',
    title: 'Leadership Summit',
    description: 'An exclusive summit for senior leaders to align on strategic goals for Q3 and Q4.',
    date: new Date('2026-05-28T14:00:00'),
    location: 'Executive Conference Room, 5F',
    facilitator: 'James Reyes',
    inviteOnly: true,
  },
  {
    id: '3',
    title: 'Tech Talk: React Native & Expo 54',
    description: 'A deep dive into the new architecture features of React Native 0.81 and Expo SDK 54, including Fabric renderer, JSI, and TurboModules. Open to all engineers.',
    date: new Date('2026-05-22T10:30:00'),
    location: 'Room 3B, Tech Hub',
    facilitator: 'Adrian Puzon',
    inviteOnly: false,
  },
  {
    id: '4',
    title: 'Team Building Workshop',
    description: 'Half-day team building activities focused on collaboration and communication.',
    date: new Date('2026-04-10T08:00:00'),
    location: 'Outdoor Venue, Laguna',
    facilitator: 'Celine Torres',
    inviteOnly: false,
  },
  {
    id: '5',
    title: 'Product Roadmap Review',
    description: 'Quarterly review of the product roadmap with key stakeholders.',
    date: new Date('2026-07-01T15:00:00'),
    location: 'Virtual — Google Meet',
    facilitator: 'Marco Lim',
    inviteOnly: true,
  },
];
