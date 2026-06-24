import React from 'react';
import { FiDownload, FiBookOpen, FiUser, FiDollarSign, FiCalendar, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

export default function PurchaseHistory() {

  const purchases = [
    {
      id: 1,
      ebookName: 'The Art of Next.js',
      writer: 'John Doe',
      price: 15.99,
      purchaseDate: 'June 15, 2026',
      status: 'Completed',
    },
    {
      id: 2,
      ebookName: 'Mastering Tailwind CSS',
      writer: 'Jane Smith',
      price: 12.50,
      purchaseDate: 'June 10, 2026',
      status: 'Pending',
    },
    {
      id: 3,
      ebookName: 'JavaScript: The Modern Parts',
      writer: 'David Lee',
      price: 19.99,
      purchaseDate: 'May 28, 2026',
      status: 'Completed',
    },
    {
      id: 4,
      ebookName: 'UI/UX Design Fundamentals',
      writer: 'Sarah Connor',
      price: 24.00,
      purchaseDate: 'May 14, 2026',
      status: 'Failed',
    },
  ];


  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Failed':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };


  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return <FiCheckCircle className="w-4 h-4" />;
      case 'Pending': return <FiClock className="w-4 h-4" />;
      case 'Failed': return <FiAlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-15">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FiBookOpen className="text-indigo-600" /> Purchase History
          </h2>
          <p className="text-sm text-gray-500 mt-1">Manage and download your purchased ebooks</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg self-start sm:self-center">
          Total Purchases: {purchases.length}
        </span>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm font-semibold">
              <th className="px-6 py-4 flex items-center gap-2"><FiBookOpen className="text-gray-400" /> Ebook Name</th>
              <th className="px-6 py-4"><span className="flex items-center gap-2"><FiUser className="text-gray-400" /> Writer</span></th>
              <th className="px-6 py-4"><span className="flex items-center gap-2"><FiDollarSign className="text-gray-400" /> Price</span></th>
              <th className="px-6 py-4"><span className="flex items-center gap-2"><FiCalendar className="text-gray-400" /> Purchase Date</span></th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100 text-gray-700 text-sm">
            {purchases.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition duration-150">
                {/* Ebook Name */}
                <td className="px-6 py-4 font-semibold text-gray-900 max-w-xs truncate">
                  {item.ebookName}
                </td>
                
                {/* Writer */}
                <td className="px-6 py-4 text-gray-600">
                  {item.writer}
                </td>
                
                {/* Price */}
                <td className="px-6 py-4 font-medium text-gray-900">
                  ${item.price.toFixed(2)}
                </td>
                
                {/* Purchase Date */}
                <td className="px-6 py-4 text-gray-500">
                  {item.purchaseDate}
                </td>
                
                {/* Status */}
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusStyle(item.status)}`}>
                    {getStatusIcon(item.status)}
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}