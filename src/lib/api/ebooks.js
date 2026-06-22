import { serverFetch } from "../code/server";



export const getEbooksById = async (ebookId) => {

  return serverFetch(`/api/ebooks/${ebookId}`);
};