import React from 'react';

// assuming baseURL is defined or handled via env
const baseURL = process.env.NEXT_PUBLIC_API_URL || '';

const fetchEbooks = async () => {
    try {
        const res = await fetch(`${baseURL}/api/ebooks`);
        if (!res.ok) throw new Error('Failed to fetch ebooks');
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

const BrowserEbookPage = async () => {
    const ebooks = await fetchEbooks();
    // console.log(ebooks);
    

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
                        Browse All Ebooks
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Easily find and explore books from your favorite authors and genres.
                    </p>
                </div>

                {/* Responsive Grid Layout: Mobile 2, Tablet 3, Desktop 4 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {ebooks.map((book) => (
                        <div
                            key={book.id}
                            className="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Cover Image Container */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
                                <img
                                    src={book.cover_image}
                                    alt={book.title}
                                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />

                                {/* Sold Badge */}
                                {book.is_sold && (
                                    <span className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                        Sold 🏷️
                                    </span>
                                )}

                                {/* Genre Tag */}
                                <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium px-2 py-0.5 rounded-md">
                                    {book.genre}
                                </span>
                            </div>

                            {/* Book Info Container */}
                            <div className="p-4 flex flex-col flex-grow">
                                <span className="text-xs text-gray-500 font-medium mb-1 truncate">
                                    {book.writer_name}
                                </span>
                                <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                                    {book.title}
                                </h3>

                                {/* Rating (Optional if present) */}
                                {book.rating && (
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-amber-500 text-xs">⭐</span>
                                        <span className="text-xs font-semibold text-gray-700">{book.rating}</span>
                                        <span className="text-[10px] text-gray-400">({book.review_count})</span>
                                    </div>
                                )}

                                {/* Price Section */}
                                <div className="mt-4 flex items-baseline gap-2 pt-3 border-t border-gray-50">
                                    {book.discount_price ? (
                                        <>
                                            <span className="text-base md:text-lg font-extrabold text-indigo-600">
                                                ৳{book.discount_price}
                                            </span>
                                            <span className="text-xs text-gray-400 line-through">
                                                ৳{book.price}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-base md:text-lg font-extrabold text-gray-900">
                                            ৳{book.price}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State UI */}
                {ebooks.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-200 mt-6">
                        <p className="text-gray-500 font-medium">Not Found!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowserEbookPage;