import { UserRole } from '@prisma/client';

export const users = [
  {
    id: '410544b2-4001-4277-9855-fec4b6a6444a',
    name: 'Wilkinson Egwu',
    phone: '615-354-1234',
    company: '1031X',
    role: UserRole.QI,
    email: 'wilkinson@deferally.ai',
    password: '123456',
  },
  {
    id: '410544b2-4001-4271-9844-fec4b6a6222b',
    name: 'Chris Smalley',
    phone: '615-354-1234',
    company: '1031X',
    role: UserRole.QI,
    email: 'chris@deferally.ai',
    password: '123456',
  },
  {
    id: '410544b2-4662-4271-9855-fec4b6a6333c',
    name: 'Garrett McGiffert',
    phone: '615-354-1234',
    company: '1031X',
    role: UserRole.QI,
    email: 'garrett@deferally.ai',
    password: '123456',
  },
  {
    id: '410544b2-4662-4271-9855-fec4b6a6777d',
    name: 'Testy McTesterson',
    phone: '615-354-1234',
    company: '1031X',
    role: UserRole.QI,
    email: 'test@test.com',
    password: '123456',
  },
];
