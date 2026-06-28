"use server";

const baseURL =
  process.env.NEXT_PUBLIC_SERVER_URL;

export const getAddedBooks = async (email) => {
  const res = await fetch(`${baseURL}/api/my-addedbook/${email}`, {
    cache: "no-store",
  });

  return res.json();
};