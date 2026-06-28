import { headers } from "next/headers";
import { auth } from "../auth";
import { serverFetch } from "../code/server";
import { authClient } from "../auth-client";

const baseURl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getEbooksById = async (ebookId) => {

  return serverFetch(`/api/ebooks/${ebookId}`);
};


export const getEbooks = async (page) => {
  if(!page){
    page = 1;
  }
  const res = await fetch(`${baseURl}/api/ebooks?page=${page}`)

  const data = await res.json();
  return data;
}

export const getAllEbooks = async (search) => {
  const res = await fetch(`${baseURl}/api/ebooks?search=${search}`)


  const data = await res.json();

  return data;
}

// export const addedEbook = async (ebook) => {


//   const {token} = await auth.api.getAccessToken({
//     headers: await headers()
//   });
  
//   // const {data: token} = await authClient.token()
//   console.log(token.token,  'verefy token');
  


//    const res = await fetch(`${baseURl}/api/my/addedbook`,{
//      method: "POST",
//      headers: {
//       "Content-Type": "application/json",
//      },

//      body: JSON.stringify(ebook),
     
//    })
//    const data = await res.json()
//    return data
// }