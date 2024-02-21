// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4277-9855-fec4b6a6444a',
    name: 'Wilkinson Egwu',
    phone: '615-354-1234',
    company: '1031X',
    role: 'QI',
    email: 'wilkinson@deferally.ai',
    password: '123456',
    qi_id: '1001'
  },
  {
    id: '410544b2-4001-4271-9844-fec4b6a6222b',
    name: 'Chris Smalley',
    phone: '615-354-1234',
    company: '1031X',
    role: 'QI',
    email: 'chris@deferally.ai',
    password: '123456',
    qi_id: '1001'
  },
  {
    id: '410544b2-4662-4271-9855-fec4b6a6333c',
    name: 'Garrett McGiffert',
    phone: '615-354-1234',
    company: '1031X',
    role: 'QI',
    email: 'garrett@deferally.ai',
    password: '123456',
    qi_id: '1001'
  },
  {
    id: '410544b2-4662-4271-9855-fec4b6a6777d',
    name: 'Testy McTesterson',
    phone: '615-354-1234',
    company: '1031X',
    role: 'QI',
    email: 'test@test.com',
    password: '123456',
    qi_id: '1001'
  },
];

const exchanges = [
  {
    id: '660544b2-4332-4271-9855-fec4b6a6777d',
    exchange_id: '10001',
    qi_id: '1001',
    start_date: '2023-11-22',
    end_date: '2023-12-26',
    status: 'completed'
  },
  {
    id: '660544b2-4662-4266-9889-fec4b6a6777b',
    exchange_id: '10002',
    qi_id: '1001',
    start_date: '2023-12-12',
    end_date: '2024-01-08',
    status: 'completed'
  },
  {
    id: '660544b2-4562-4271-9855-fec4b6a6777d',
    exchange_id: '10003',
    qi_id: '1001',
    start_date: '2024-01-12',
    end_date: '',
    status: 'active'
  },
];

const exchangeUser = [
  {
    user_id: '410544b2-4001-4277-9855-fec4b6a6444a',
    qi_id: '1001',
    exchange_id: '10001'
  },
  {
    user_id: '410544b2-4001-4271-9844-fec4b6a6222b',
    qi_id: '1001',
    exchange_id: '10001'
  },
  {
    user_id: '410544b2-4662-4271-9855-fec4b6a6333c',
    qi_id: '1001',
    exchange_id: '10001'
  },
  {
    user_id: '410544b2-4662-4271-9855-fec4b6a6777d',
    qi_id: '1001',
    exchange_id: '10001'
  },
  {
    user_id: '410544b2-4001-4277-9855-fec4b6a6444a',
    qi_id: '1001',
    exchange_id: '10002'
  },
  {
    user_id: '410544b2-4001-4271-9844-fec4b6a6222b',
    qi_id: '1001',
    exchange_id: '10002'
  },
  {
    user_id: '410544b2-4662-4271-9855-fec4b6a6333c',
    qi_id: '1001',
    exchange_id: '10002'
  },
  {
    user_id: '410544b2-4662-4271-9855-fec4b6a6777d',
    qi_id: '1001',
    exchange_id: '10002'
  },
  {
    user_id: '410544b2-4001-4277-9855-fec4b6a6444a',
    qi_id: '1001',
    exchange_id: '10003'
  },
  {
    user_id: '410544b2-4001-4271-9844-fec4b6a6222b',
    qi_id: '1001',
    exchange_id: '10003'
  },
  {
    user_id: '410544b2-4662-4271-9855-fec4b6a6333c',
    qi_id: '1001',
    exchange_id: '10003'
  },
  {
    user_id: '410544b2-4662-4271-9855-fec4b6a6777d',
    qi_id: '1001',
    exchange_id: '10003'
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  exchanges,
  exchangeUser,
  invoices,
  revenue,
};
