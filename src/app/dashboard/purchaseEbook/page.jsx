import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import { TbCurrencyTaka } from 'react-icons/tb';

const PurcheseEbookPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    if (!user) {
        return (
            <div className="text-center py-20">
                Please login to see your purchased ebooks.
            </div>
        );
    }

    const res = await fetch(
        `http://localhost:8000/PurchasedNow/${user.id}`);

    const Purchased = await res.json();
   
    // console.log("Purchased:", Purchased);

    const totalBooks = Purchased?.length || 0;

    return (
        <FadeUp className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">

            {/* HEADER */}
            <div className="mb-8 border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">

                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-950">
                        My Purchased Ebooks
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Here are all the premium ebooks you have unlocked.
                    </p>
                </div>

                {totalBooks > 0 && (
                    <div className="mt-4 sm:mt-0">
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            Total: {totalBooks} {totalBooks === 1 ? 'Book' : 'Books'}
                        </span>
                    </div>
                )}
            </div>

            {/* EMPTY STATE */}
            {totalBooks === 0 ? (
                <div className="text-center py-24 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
                    <div className="text-gray-400 mb-3 text-4xl">📚</div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        No Books Found
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">
                        You haven&apos;t purchased any ebooks yet.
                    </p>
                </div>
            ) : (

                /* GRID */
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {Purchased.map((ebook) => (
                        <div
                            key={ebook._id}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        >

                            {/* IMAGE */}
                            <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={ebook.image}
                                    alt={ebook.ebookTitle}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-1 flex-col p-5">

                                {/* TITLE FIXED */}
                                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                    {ebook.ebookTitle}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-1 text-sm text-gray-600 line-clamp-2 flex-1">
                                    {ebook.description}
                                </p>

                                {/* PRICE */}
                                <p className="mt-2 text-sm font-semibold text-gray-800 flex items-center gap-1">
                                    <TbCurrencyTaka />{ebook.price}
                                </p>

                                {/* BUTTON */}
                                <div className="mt-5">
                                    <Link
                                        href={`/ebooks/${ebook._id}`}
                                        className="inline-flex w-full items-center justify-center rounded bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                                    >
                                        Read Details
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            )}
        </FadeUp>
    );
};

export default PurcheseEbookPage;