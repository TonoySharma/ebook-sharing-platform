import { getEbooksById } from '@/lib/api/ebooks';
import React from 'react';
import Link from 'next/link';
import {
    FaBookOpen,
    FaUser,
    FaTag,
    FaRegBookmark,
    FaStar,
    FaShoppingCart,
    FaCheckCircle,
    FaCalendarAlt
} from 'react-icons/fa';

const EbooksDetailsPage = async ({ params }) => {
    const { id } = await params;
    const book = await getEbooksById(id);

    // console.log(book, 'details ebooks');


    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-xl font-semibold text-gray-500">Ebook Not Found!</p>
            </div>
        );
    }


    const isLoggedIn = true;
    const currentUser = { id: "u-999" };
    const hasPurchased = false;

    const isWriterOfThisBook = currentUser?.id === book.writer_id;


    const discountPercentage = book.discount_price
        ? Math.round(((book.price - book.discount_price) / book.price) * 100)
        : 0;

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10">


                    <div className="lg:col-span-5 flex flex-col items-center">
                        <div className="relative group w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                            <img
                                src={book.cover_image}
                                alt={book.title}
                                className="w-full h-full object-cover"
                                loading="eager"
                            />

                            {book.discount_price && !book.is_sold && (
                                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md animate-pulse">
                                    {discountPercentage}% OFF
                                </span>
                            )}

                            {book.is_sold && (
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                                    <span className="bg-red-600 text-white text-sm font-black tracking-wider uppercase px-6 py-2.5 rounded-xl shadow-lg border border-red-400">
                                        Sold Out 🏷️
                                    </span>
                                </div>
                            )}
                        </div>


                        <button className="mt-6 flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 font-medium text-sm">
                            <FaRegBookmark className="text-lg" />
                            <span>Bookmark for Later</span>
                        </button>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                        <div>

                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                                    <FaBookOpen className="text-xs" /> {book.genre}
                                </span>
                                {book.rating && (
                                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-bold px-2.5 py-1.5 rounded-lg">
                                        <FaStar className="text-amber-500" /> {book.rating} ({book.review_count} reviews)
                                    </span>
                                )}
                                <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg ${book.is_sold ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'}`}>
                                    {book.is_sold ? 'Unavailable / Sold' : 'Available'}
                                </span>
                            </div>


                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
                                {book.title}
                            </h1>


                            <div

                                className="inline-flex items-center gap-2 group text-gray-600 hover:text-indigo-600 transition-colors mb-6"
                            >
                                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-indigo-50 transition-colors">
                                    <FaUser className="text-xs" />
                                </div>
                                <span className="font-semibold text-sm md:text-base border-b border-dashed border-gray-400 group-hover:border-indigo-600">
                                    {book.writer_name}
                                </span>
                            </div>

                            <hr className="border-gray-100 my-4" />


                            <div className="space-y-2">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Description Preview</h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {book.description}
                                </p>
                            </div>
                        </div>


                        <div className="bg-gray-50/70 rounded-2xl p-6 border border-gray-100 space-y-6">
                            <div className="flex flex-wrap gap-y-2 justify-between items-center text-xs md:text-sm text-gray-500">
                                <span className="flex items-center gap-1.5">
                                    <FaCalendarAlt /> Uploaded: {book.createdAt ? new Date(book.createdAt).toLocaleDateString('bn-BD') : 'N/A'}
                                </span>
                            </div>


                            <div className="flex items-baseline gap-3">
                                {book.discount_price ? (
                                    <>
                                        <span className="text-3xl md:text-4xl font-black text-indigo-600">৳{book.discount_price}</span>
                                        <span className="text-sm md:text-base text-gray-400 line-through">৳{book.price}</span>
                                    </>
                                ) : (
                                    <span className="text-3xl md:text-4xl font-black text-gray-900">৳{book.price}</span>
                                )}
                            </div>


                            <div className="w-full">
                                {hasPurchased ? (
                                    <button disabled className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl cursor-not-allowed shadow-lg">
                                        <FaCheckCircle className="text-lg" />
                                        Already Purchased & Unlocked
                                    </button>
                                ) : isWriterOfThisBook ? (
                                    <div className="space-y-2">
                                        <button disabled className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-400 font-bold py-4 px-6 rounded-xl cursor-not-allowed">
                                            Purchase Disabled
                                        </button>
                                        <p className="text-xs text-center text-amber-600 font-medium">You cannot purchase your own ebook.</p>
                                    </div>
                                ) : book.is_sold ? (
                                    <button disabled className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-400 font-bold py-4 px-6 rounded-xl cursor-not-allowed">
                                        Out of Stock (Sold)
                                    </button>
                                ) : !isLoggedIn ? (
                                    <Link href="/login" className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl text-center shadow-lg transition-all">
                                        <FaShoppingCart />
                                        Login to Purchase
                                    </Link>
                                ) : (

                                    <form action={`http://localhost:8000/api/checkout/stripe?bookId=${book._id}`} method="POST">
                                        <button type="submit" className="w-full flex items-center justify-center gap-2 cursor-pointer
                                         bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded transition-all shadow-lg">
                                            <FaShoppingCart />
                                            Proceed Book
                                        </button>
                                    </form>
                                )}
                            </div>

                        </div>

                    </div>
                </div>


                {hasPurchased && book.full_content && (
                    <div className="border-t border-gray-100 bg-indigo-50/30 p-6 md:p-10">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FaBookOpen className="text-indigo-600" /> Full Book (Premium Content)
                        </h2>
                        <div className="bg-white rounded-2xl p-6 shadow-inner border border-gray-100 text-gray-700 leading-loose whitespace-pre-line">
                            {book.full_content || "No content available at the moment."}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default EbooksDetailsPage;