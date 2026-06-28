"use client";

import FadeUp from "@/components/FadeUp";
import { Button } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ManageAllEbook = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const res = await fetch("http://localhost:8000/admin/ebooks");
        const data = await res.json();
        setBooks(data);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchBooks();
    }, []);

    const changeStatus = async (id, status) => {
        const res = await fetch(
            `http://localhost:8000/admin/ebooks/${id}/status`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            }
        );

        if (res.ok) {
            fetchBooks();
        }
    };

    const deleteBook = async (id) => {
        const res = await fetch(`http://localhost:8000/admin/ebooks/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            fetchBooks();
        }
    };

    return (
        <FadeUp className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-900">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Manage All Ebooks
                </h1>

                <span className="w-fit text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full font-medium">
                    Total: {books.length} Ebooks
                </span>
            </div>

            <div className="w-full overflow-x-auto rounded-xl">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm text-left text-slate-600 dark:text-slate-300">

                    <thead>
                        <tr className="bg-slate-50/70 backdrop-blur-sm dark:bg-slate-800/50">

                            <th className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 rounded-l-xl">
                                Title
                            </th>

                            <th className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800">
                                Writer
                            </th>

                            <th className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800">
                                Price
                            </th>

                            <th className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800">
                                Status
                            </th>

                            <th className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 rounded-r-xl text-right">
                                Actions
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {books.map((book) => (
                            <tr
                                key={book._id}
                                className="group transition-colors duration-200 hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                            >

                                <td className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/60 max-w-[150px] sm:max-w-[220px] lg:max-w-[280px] truncate whitespace-nowrap">
                                    {book.title}
                                </td>

                                <td className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 border-b border-slate-100 dark:border-slate-800/60 whitespace-nowrap">
                                    {book.writer_name}
                                </td>

                                <td className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 border-b border-slate-100 dark:border-slate-800/60 whitespace-nowrap">
                                    <div className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                                        <FaBangladeshiTakaSign />
                                        {book.price}
                                    </div>
                                </td>

                                <td className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 border-b border-slate-100 dark:border-slate-800/60">

                                    <span
                                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium capitalize ring-1 ring-inset ${
                                            book.status === "published"
                                                ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400"
                                                : "bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400"
                                        }`}
                                    >
                                        <span
                                            className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                                                book.status === "published"
                                                    ? "bg-emerald-500"
                                                    : "bg-amber-500"
                                            }`}
                                        />
                                        {book.status}
                                    </span>

                                </td>

                                <td className="px-3 sm:px-4 lg:px-6 py-3 lg:py-4 border-b border-slate-100 dark:border-slate-800/60">

                                    <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2">

                                        <Button
                                            onClick={() =>
                                                changeStatus(
                                                    book._id,
                                                    book.status === "published"
                                                        ? "unpublished"
                                                        : "published"
                                                )
                                            }
                                            className={`rounded-lg px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold transition-all ${
                                                book.status === "published"
                                                    ? "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
                                                    : "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                                            }`}
                                        >
                                            {book.status === "published"
                                                ? "Unpublish"
                                                : "Publish"}
                                        </Button>

                                        <Button
                                            onClick={() => deleteBook(book._id)}
                                            className="rounded-lg border border-red-200 bg-red-100 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-red-600 hover:bg-red-200"
                                        >
                                            Delete
                                        </Button>

                                    </div>

                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </FadeUp>
    );
};

export default ManageAllEbook;