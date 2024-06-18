## DeferAlly 1031 Exchange Playground

This is the Testing ground for DeferAlly Demo

For more information, see the [NextJS Tutorial](https://nextjs.org/learn/dashboard-app) on the Next.js Website.

**Prerequisites**
1. Clone Repo
2. Push to Github
3. [Create a Vercel Account](vercel.com/signup). Choose the free "hobby" plan. Select Continue with GitHub to connect your GitHub and Vercel accounts.
4. Connect and deploy your project. If you have any issues, follow these [instructions](https://nextjs.org/learn/dashboard-app/setting-up-your-database#connect-and-deploy-your-project) through **Seed your database**

**Setup Steps**
1. Create `.env` file according to [.env.template](./.env.template).
2. `npm install`
3. `npm i @vercel/postgres`
4. `npm run generate`
5. `npm run migrate:dev`
6. `npm run dev`
7. Navigate to [Login](http://localhost:3000/login)

**Technologies Used**
- **Next.js**:
A React framework for building web applications with server-side rendering and other powerful features.

- **TypeScript**:
A superset of JavaScript that adds static types to the language.

- **Prisma**:
An open-source database toolkit for TypeScript and Node.js that provides a query builder, ORM, and migration tool.

- **Vercel/Postgres**:
A combination of Vercel for deployment and Postgres as the relational database, connected using the @vercel/postgres library.

- **JWT (JSON Web Tokens)**:
A standard for securely transmitting information between parties as a JSON object.

- **Prisma Client**:
The auto-generated query builder and type-safe database client for TypeScript and Node.js.

- **Axios**:
A promise-based HTTP client for making requests to APIs.

- **Tailwind CSS**:
A utility-first CSS framework that makes it easy to design responsive and visually consistent interfaces.

- **Redux Toolkit**:
A set of tools and guidelines for Redux, a predictable state container for JavaScript applications.

- **React-Query**:
A library for managing, caching, and synchronizing asynchronous and remote data in React applications.

- **React-Hook-Form**:
A library for managing forms in React with hooks.
