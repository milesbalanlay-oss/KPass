import { Event } from '../types/event.type';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'University Foundation Day 2026',
    description: 'Celebrate the 90th founding anniversary of Adamson University with a day of academic exhibits, cultural performances, and a thanksgiving mass at the University Chapel.',
    date: new Date('2026-06-15T08:00:00'),
    location: 'AdU Main Campus, San Marcelino St., Ermita, Manila',
    facilitator: 'Dr. Emmanuel Santos',
    inviteOnly: false,
  },
  {
    id: '2',
    title: 'College of Engineering Research Symposium',
    description: 'Annual research symposium showcasing undergraduate and graduate research outputs from the College of Engineering. Poster presentations, paper defenses, and a keynote from an industry expert.',
    date: new Date('2026-05-28T09:00:00'),
    location: 'Engineering Building, Room 301, Adamson University',
    facilitator: 'Engr. Patricia Cruz',
    inviteOnly: false,
  },
  {
    id: '3',
    title: 'Student Council General Assembly',
    description: 'Semestral general assembly for all enrolled students of Adamson University. Agenda includes updates from the Supreme Student Council, budget proposals, and open forum.',
    date: new Date('2026-05-22T13:00:00'),
    location: 'University Gymnasium, Adamson University',
    facilitator: 'John Carlo Reyes',
    inviteOnly: false,
  },
  {
    id: '4',
    title: "Dean's List Recognition Night",
    description: 'Exclusive recognition ceremony honoring students who made the Dean\'s List for the 1st Semester AY 2025–2026. Attendance is by invitation only.',
    date: new Date('2026-06-05T18:00:00'),
    location: 'AdU Auditorium, Adamson University',
    facilitator: 'Dr. Maricel Lim',
    inviteOnly: true,
  },
  {
    id: '5',
    title: 'Freshmen Orientation Program',
    description: 'Welcome program for all incoming freshmen and transferees for AY 2026–2027. Includes university overview, college-specific orientations, and a welcoming mass.',
    date: new Date('2026-07-06T07:30:00'),
    location: 'Adamson University Chapel, San Marcelino St.',
    facilitator: 'Fr. Ricky dela Cruz, SVD',
    inviteOnly: false,
  },
];
