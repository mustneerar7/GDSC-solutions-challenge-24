import db from "utils/firebase";

export const createUser = async (userId: string) => {
  const newUser = await db.collection("users").doc(userId).set({
    firstName: "Ahmad",
    lastName: "Aziz",
    saved: [],
    listings: [],
    offers: []
  })

  return newUser;
};
