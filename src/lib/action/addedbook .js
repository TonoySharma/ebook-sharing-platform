"use server";

const baseURL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8000";

export const addedbook = async (newAddedEbook) => {
  const res = await fetch(`${baseURL}/api/my/addedbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAddedEbook),
  });

  return res.json();
};