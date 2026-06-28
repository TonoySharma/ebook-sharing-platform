
import { authClient } from "../auth-client";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const addedbook = async (newAddedEbook) => {

  const {data:token} = await authClient.token()
  // console.log(token);
  


  const res = await fetch(`${baseURL}/api/my/addedbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${token?.token}`,
    },
    
    body: JSON.stringify(newAddedEbook),
  });

  return res.json();
};