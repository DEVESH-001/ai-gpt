//https://www.better-auth.com/docs/integrations/next
//action to get the current user, we will use better-auth and prisma to get the user from the database.

"use server";

const { auth } = require("@/lib/auth");
const { default: prismaDB } = require("@/lib/database");
const { headers } = require("next/headers");

export const currentUser = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user?.id) {
      return null;
    }
    //get user from db
    const user = await prismaDB.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        name: true,
        email: true,
        id: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};
