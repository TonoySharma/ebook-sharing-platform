"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import EbookFilter from '@/components/EbooksFilter';
import FadeUp from './FadeUp';
import { Pagination, Table } from '@heroui/react';
import { TbCurrencyTaka } from 'react-icons/tb';

export default function AllEbooks({ initialEbooks, searchParams }) {
    // console.log(initialEbooks)
    // const search = searchParams?.search || "";
    // const genre = searchParams?.genre || "All";
    // const price = searchParams?.price || "all";
    const initialEbooksData = initialEbooks.data;

//    let filteredBooks = initialEbooksData;

    // if (search) {
    //     filteredBooks = filteredBooks.filter((book) =>
    //         book.title.toLowerCase().includes(search.toLowerCase())
    //     );
    // }

    // if (genre !== "All") {
    //     filteredBooks = filteredBooks.filter(
    //         (book) => book.genre === genre
    //     );
    // }

    // if (price === "0-200") {
    //     filteredBooks = filteredBooks.filter((book) => book.price <= 200);
    // }

    // if (price === "200-400") {
    //     filteredBooks = filteredBooks.filter(
    //         (book) => book.price > 200 && book.price <= 400
    //     );
    // }

    // if (price === "400-above") {
    //     filteredBooks = filteredBooks.filter((book) => book.price > 400);
    // }

    // console.log(initialEbooks);
    const page = initialEbooks.page;
    const pages = []
    const totalPages = initialEbooks.totalPage;
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }





    return (
        <>
            {/* search and filter */}
            <EbookFilter />

            <div className="max-w-7xl mx-auto mt-10">
                <FadeUp className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {initialEbooksData.map((book) => (
                        <div
                            key={book._id}
                            className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Image */}
                            <div className="relative h-52 w-full overflow-hidden bg-gray-200">
                                <img
                                    src={book.cover_image}
                                    alt={book.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />

                                {book.is_sold && (
                                    <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                        Sold Out
                                    </span>
                                )}

                                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md">
                                    {book.genre}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-3 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs text-gray-500 block truncate">
                                        {book.writer_name}
                                    </span>

                                    <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                        {book.title}
                                    </h3>

                                    {book.rating && (
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className="text-amber-500 text-xs">⭐</span>
                                            <span className="text-xs font-semibold">{book.rating}</span>
                                            <span className="text-[10px] text-gray-400">
                                                ({book.review_count})
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-2">
                                    <div className="flex items-center gap-2 pt-2 border-t">
                                        {book.discount_price ? (
                                            <>
                                                <span className="text-lg font-bold text-indigo-600 flex items-center gap-1 my-2">
                                                    <TbCurrencyTaka />{book.discount_price}
                                                </span>
                                                <span className="text-xs text-gray-400 line-through flex items-center gap-1 my-2">
                                                    <TbCurrencyTaka />{book.price}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-lg font-bold text-gray-900 flex items-center gap-1 my-2">
                                                <TbCurrencyTaka />{book.price}
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        href={`/ebooks/${book._id}`}
                                        className="inline-flex w-full items-center justify-center
                                         rounded bg-gray-900 px-4 py-2.5 text-sm font-medium
                                          text-white transition-colors hover:bg-gray-800
                                         focus:outline-none focus:ring-2 cursor-pointer
                                          focus:ring-gray-950 focus:ring-offset-2">
                                        Read Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </FadeUp>
                {/* Pagination */}
                <FadeUp className='items-center justify-center flex my-8'>
                    <Table.Footer>
                        <Pagination size="sm">
                            <Pagination.Content>
                                <Pagination.Item>
                                    <Pagination.Previous
                                        isDisabled={page === 1}

                                    >
                                        <Link className='flex items-center gap-1' href={`/browse-ebook?page=${page - 1}`}>
                                            <Pagination.PreviousIcon />
                                            Prev
                                        </Link>
                                    </Pagination.Previous>
                                </Pagination.Item>
                                {pages.map((p) => (
                                    <Pagination.Item key={p} >
                                        <Link href={`/browse-ebook?page=${p}`} >
                                            <Pagination.Link isActive={p === page} className={`${p === page && 'bg-blue-500 text-white'}`}>
                                                {p}
                                            </Pagination.Link>
                                        </Link>
                                    </Pagination.Item>
                                ))}
                                <Pagination.Item>
                                    <Pagination.Next
                                        isDisabled={page === totalPages}>
                                        <Link className='flex items-center gap-1' href={`/browse-ebook?page=${page + 1}`}>


                                            Next
                                            <Pagination.NextIcon />
                                        </Link>
                                    </Pagination.Next>
                                </Pagination.Item>
                            </Pagination.Content>
                        </Pagination>
                    </Table.Footer>
                </FadeUp>

                {initialEbooksData.length === 0 && (
                    <FadeUp className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-200 mt-6">
                        <p className="text-gray-500 font-medium">Not Found!</p>
                    </FadeUp>
                )}
            </div>
        </>
    );
}