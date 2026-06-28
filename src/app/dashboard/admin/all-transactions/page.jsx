"use client";

import FadeUp from "@/components/FadeUp";
import { useEffect, useState } from "react";
import { FaMoneyBillWave, FaUser, FaCalendarAlt } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  // demo data (replace with API)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTransactions([
      {
        id: "TXN-1001",
        type: "purchase",
        email: "user1@gmail.com",
        amount: 250,
        date: "2026-06-28",
      },
      {
        id: "TXN-1002",
        type: "publishing_fee",
        email: "writer@gmail.com",
        amount: 500,
        date: "2026-06-27",
      },
    ]);
  }, []);

  const getTypeStyle = (type) => {
    switch (type) {
      case "purchase":
        return "bg-green-100 text-green-700";
      case "publishing_fee":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <FadeUp className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <MdOutlinePayments className="text-2xl" />
          View All Transactions
        </h1>
      </FadeUp>

      {/* Desktop Table */}
      <FadeUp className="hidden md:block bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4">Transaction ID</th>
              <th className="p-4">Type</th>
              <th className="p-4">User/Writer Email</th>
              <th className="p-4">Amount (৳)</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{t.id}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeStyle(
                      t.type
                    )}`}
                  >
                    {t.type.replace("_", " ")}
                  </span>
                </td>

                <td className="p-4 flex items-center gap-2">
                  <FaUser className="text-gray-500" />
                  {t.email}
                </td>

                <td className="p-4 font-semibold text-gray-800">
                  ৳ {t.amount}
                </td>

                <td className="p-4 flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" />
                  {t.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </FadeUp>

      {/* Mobile Cards */}
      <FadeUp className="md:hidden space-y-4">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow rounded-xl p-4 border hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">{t.id}</p>
              <span
                className={`px-2 py-1 rounded-full text-xs ${getTypeStyle(
                  t.type
                )}`}
              >
                {t.type.replace("_", " ")}
              </span>
            </div>

            <p className="flex items-center gap-2 text-sm text-gray-600">
              <FaUser /> {t.email}
            </p>

            <p className="flex items-center gap-2 text-sm mt-1">
              <FaMoneyBillWave /> ৳ {t.amount}
            </p>

            <p className="flex items-center gap-2 text-sm mt-1 text-gray-500">
              <FaCalendarAlt /> {t.date}
            </p>
          </div>
        ))}
      </FadeUp>
    </div>
  );
}