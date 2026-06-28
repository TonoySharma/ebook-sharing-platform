
import { serverFetch } from "../code/server";


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
