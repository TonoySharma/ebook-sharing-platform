import { fetchFeaturedEbook } from '@/lib/ebook/data';
import Link from 'next/link';
import React from 'react';
import FadeUp from './FadeUp';



const FeaturedEbooks = async ({ ebooks = [] }) => {
    const calculateDiscount = (price, discountPrice) => {
        if (!discountPrice || discountPrice >= price) return null;
        const savings = ((price - discountPrice) / price) * 100;
        return Math.round(savings);
    };

    const ebook = await fetchFeaturedEbook();

    // console.log(ebook);


    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-sans">
                            Featured Ebooks <span className="text-blue-600 dark:text-blue-400">•</span>
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            A curated list of our readers&apos; top 6 favorite books
                        </p>
                    </div>
                    <Link href={'/browse-ebook'}>
                        <button className="mt-4 md:mt-0 text-sm font-semibold cursor-pointer text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                            All Books &rarr;
                        </button>

                    </Link>
                </FadeUp>

                {/* Ebook Grid (Handles exactly 6 items gracefully) */}
                <FadeUp className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {ebook?.slice(0, 8).map((book) => {
                        const discountPercentage = calculateDiscount(book.price, book.discount_price);

                        return (
                            <div
                                key={book._id}
                                className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col"
                            >
                                {/* Cover */}
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={book.cover_image}
                                        alt={book.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />

                                    {discountPercentage && (
                                        <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                                            {discountPercentage}% OFF
                                        </span>
                                    )}

                                    <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md">
                                        {book.genre}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-3 flex flex-col flex-1">
                                    <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {book.title}
                                    </h3>

                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                                        {book.writer_name}
                                    </p>

                                    <div className="flex items-center gap-1 mt-2">
                                        <span className="text-amber-500 text-xs">★</span>
                                        <span className="text-xs font-medium">
                                            {book.rating || "4.8"}
                                        </span>
                                        <span className="text-[10px] text-gray-400">
                                            ({book.review_count || 0})
                                        </span>
                                    </div>

                                    <div className="mt-3 flex items-center gap-2">
                                        {book.discount_price ? (
                                            <>
                                                <span className="text-base font-bold text-blue-600">
                                                    ৳{book.discount_price}
                                                </span>
                                                <span className="text-xs text-gray-400 line-through">
                                                    ৳{book.price}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-base font-bold text-gray-900 dark:text-white">
                                                ৳{book.price}
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
                        );
                    })}
                </FadeUp>
            </div>
        </section>
    );
};

export default FeaturedEbooks;