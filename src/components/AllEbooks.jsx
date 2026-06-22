// components/EbooksList.jsx
"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import EbookFilter from '@/components/EbooksFilter';

export default function AllEbooks({ initialEbooks }) {
  
    const [displayedEbooks, setDisplayedEbooks] = useState(initialEbooks);

    return (
        <>
            {/* search and filter */}
            <EbookFilter ebooks={initialEbooks} onFilterChange={setDisplayedEbooks} />

            <div className="max-w-7xl mx-auto mt-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {displayedEbooks.map((book) => (
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
                                    <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                        Sold 🏷️
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
                                                <span className="text-lg font-bold text-indigo-600">
                                                    ৳{book.discount_price}
                                                </span>
                                                <span className="text-xs text-gray-400 line-through">
                                                    ৳{book.price}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-lg font-bold text-gray-900">
                                                ৳{book.price}
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        href={`/ebooks/${book._id}`}
                                        className="mt-3 flex items-center justify-center py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {displayedEbooks.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-200 mt-6">
                        <p className="text-gray-500 font-medium">Not Found!</p>
                    </div>
                )}
            </div>
        </>
    );
}