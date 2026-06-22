import React from 'react';
import Link from 'next/link';

const EbooksPage = async () => {
    const res = await fetch('http://localhost:8000/api/ebooks', { cache: 'no-store' });
    const ebooks = await res.json();

    console.log(ebooks, 'EbooksPage');

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
   
                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
                        Browse All Ebooks
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Easily find and explore books from your favorite authors and genres.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {ebooks.map((book) => (
                        <div
                            key={book._id}
                 
                            className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                   
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200 shrink-0">
                                <img
                                    src={book.cover_image}
                                    alt={book.title}
                                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                      
                                {book.is_sold && (
                                    <span className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                        Sold 🏷️
                                    </span>
                                )}

                                <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium px-2 py-0.5 rounded-md">
                                    {book.genre}
                                </span>
                            </div>

                           
             
                            <div className="p-4 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs text-gray-500 font-medium mb-0.5 block truncate">
                                        {book.writer_name}
                                    </span>
                                    
                                
                                    <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-2 group-hover:text-indigo-600 transition-colors leading-snug min-h-[40px]">
                                        {book.title}
                                    </h3>

                                   {book.rating && (
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className="text-amber-500 text-xs">⭐</span>
                                            <span className="text-xs font-semibold text-gray-700">{book.rating}</span>
                                            <span className="text-[10px] text-gray-400">({book.review_count})</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-3">
                             
                                    <div className="flex items-baseline gap-2 pt-2 border-t border-gray-50">
                                        {book.discount_price ? (
                                            <>
                                                <span className="text-base font-extrabold text-indigo-600">
                                                    ৳{book.discount_price}
                                                </span>
                                                <span className="text-xs text-gray-400 line-through">
                                                    ৳{book.price}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-base font-extrabold text-gray-900">
                                                ৳{book.price}
                                            </span>
                                        )}
                                    </div>

                         
                                    <div className="mt-3">
                                        <Link 
                                            href={`/ebooks/${book._id}`}
                                            className="w-full flex items-center justify-center text-center px-4 py-2 text-xs md:text-sm font-semibold rounded-xl bg-gray-50 text-gray-700 border border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-sm"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

         
                {ebooks.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-200 mt-6">
                        <p className="text-gray-500 font-medium">Not Found!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EbooksPage;