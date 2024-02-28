const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
  exchanges,
  exchangeUser,
} = require('../src/app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NULL,
        company VARCHAR(255) NULL,
        role VARCHAR(255) NOT NULL DEFAULT 'other',
        email VARCHAR(255) NOT NULL UNIQUE,
        password TEXT NOT NULL,
        qi_id VARCHAR(60) NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, phone, company, role, email, password, qi_id)
        VALUES (${user.id}, ${user.name},${user.phone},${user.company},${user.role}, ${user.email}, ${hashedPassword}, ${user.qi_id})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "invoices" table`);

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedexchanges(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "exchanges" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS exchanges (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        exchange_id VARCHAR(255) NOT NULL,
        qi_id VARCHAR(255) NOT NULL,
        start_date VARCHAR(255) NOT NULL,
        end_date VARCHAR(255) NULL,
        status VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "exchanges" table`);

    // Insert data into the "exchanges" table
    const insertedexchanges = await Promise.all(
      exchanges.map(async (user) => {
        return client.sql`
        INSERT INTO exchanges (id, exchange_id, qi_id, start_date, end_date, status)
        VALUES (${user.id}, ${user.exchange_id},${user.qi_id},${user.start_date},${user.end_date}, ${user.status})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedexchanges.length} exchanges`);

    return {
      createTable,
      exchanges: insertedexchanges,
    };
  } catch (error) {
    console.error('Error seeding exchanges:', error);
    throw error;
  }
}

async function seedexchangeUser(client) {
  try {
    // Create the "exchangeUser" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS exchangeUser (
        exchange_id VARCHAR(255) NOT NULL,
        qi_id VARCHAR(255) NOT NULL,
        user_id VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "exchangeUser" table`);

    // Insert data into the "exchangeUser" table
    const insertedexchangeUser = await Promise.all(
      exchangeUser.map(async (user) => {
        return client.sql`
        INSERT INTO exchangeUser (exchange_id, qi_id, user_id)
        VALUES (${user.exchange_id},${user.qi_id},${user.user_id})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedexchangeUser.length} exchangeUser`);

    return {
      createTable,
      exchangeUser: insertedexchangeUser,
    };
  } catch (error) {
    console.error('Error seeding exchangeUser:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "revenue" table`);

    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  // await seedCustomers(client);
  // await seedInvoices(client);
  // await seedexchanges(client);
  // await seedexchangeUser(client);
  // await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
