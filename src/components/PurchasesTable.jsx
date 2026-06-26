"use client";

import { Table } from "@heroui/react";
import { FaBookOpen, FaUser, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

const PurchaseTable = ({ purchases }) => {
  return (
    <Table className="w-full">
      <Table.ScrollContainer>
        <Table.Content aria-label="Purchase History Table">
          <Table.Header>
            <Table.Column className="bg-gray-50 text-gray-600 font-semibold py-4">Book</Table.Column>
            <Table.Column className="bg-gray-50 text-gray-600 font-semibold py-4">Ebook Name</Table.Column>
            <Table.Column className="bg-gray-50 text-gray-600 font-semibold py-4">Writer</Table.Column>
            <Table.Column className="bg-gray-50 text-gray-600 font-semibold py-4">Price</Table.Column>
            <Table.Column className="bg-gray-50 text-gray-600 font-semibold py-4">Purchase Date</Table.Column>
            <Table.Column className="bg-gray-50 text-gray-600 font-semibold py-4">Status</Table.Column>
          </Table.Header>

          <Table.Body>
            {purchases.map((book) => (
              <Table.Row key={book._id} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
                {/* Book Image */}
                <Table.Cell className="py-4">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.ebookTitle}
                      className="w-12 h-12 object-cover rounded shadow-sm border border-gray-100"
                    />
                  ) : (
                    <div className="w-12 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                      <FaBookOpen size={20} />
                    </div>
                  )}
                </Table.Cell>

                {/* Ebook Name */}
                <Table.Cell className="font-semibold text-gray-800 py-4">
                  {book.ebookTitle}
                </Table.Cell>

                {/* Writer */}
                <Table.Cell className="text-gray-600 py-4">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-gray-400 text-xs" />
                    <span>{book.writer || "Unknown"}</span>
                  </div>
                </Table.Cell>

                {/* Price */}
                <Table.Cell className="font-bold text-gray-900 py-4">
                  ৳ {book.price}
                </Table.Cell>

                {/* Purchase Date */}
                <Table.Cell className="text-gray-500 py-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400 text-xs" />
                    <span>{new Date(book.purchasedAt).toLocaleDateString("en-GB")}</span>
                  </div>
                </Table.Cell>

                {/* Status */}
                <Table.Cell className="py-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                    <FaCheckCircle className="text-green-500 text-[10px]" />
                    Paid
                  </span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default PurchaseTable;