import { User } from '@prisma/client';
import { users } from './placeholder-data';
import prisma from './index';
import bcrypt from 'bcrypt';

async function uploadUsers(users: User[]) {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  }
}

async function main() {
  await uploadUsers(users);
  console.log('Users have been uploaded successfully.');
}

main()
  .catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
