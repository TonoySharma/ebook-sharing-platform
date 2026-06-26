import PurchaseTable from "@/components/PurchasesTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const PurchasehistoryPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-xl font-semibold text-gray-600">Please login first.</h2>
      </div>
    );
  }

  const res = await fetch(`http://localhost:8000/purchases/${user.email}`, {
    cache: "no-store",
  });

  const purchases = await res.json();
  // console.log(purchases,  'purchases');
  

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Purchase History</h1>
        <p className="text-gray-500 mt-1">Manage and view your subscibed or purchased ebooks.</p>
      </div>

      {purchases.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-gray-300 rounded-2xl bg-gray-50/50">
          <h2 className="text-xl font-medium text-gray-500">No Purchase History Found</h2>
        </div>
      ) : (
        <PurchaseTable purchases={purchases} />
      )}
    </div>
  );
};

export default PurchasehistoryPage;