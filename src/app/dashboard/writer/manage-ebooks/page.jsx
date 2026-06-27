import ManageBooksTable from "@/components/ManageBooksTable";
import { getAddedBooks } from "@/lib/action/getaddedbooks";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


export default async function ManageEbooksPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        Please login first.
      </div>
    );
  }

  const ebooks = (await getAddedBooks(session.user.email)) || [];

  // console.log( ebooks);
  

  return <ManageBooksTable ebooks={ebooks} />
}