import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center space-y-8">
                {/* Modern Animated/Styled Icon Space */}
                <div className="relative flex justify-center">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 animate-pulse">
                        <div className="w-56 h-56 bg-indigo-500 rounded-full blur-3xl"></div>
                    </div>
                    
                    {/* Big 404 Text & Icon */}
                    <div className="relative">
                        <h1 className="text-9xl font-black text-indigo-600 tracking-widest drop-shadow-sm select-none">
                            404
                        </h1>
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-bold text-gray-400 shadow-sm border border-gray-100 uppercase tracking-wider">
                            Page Not Found
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl tracking-tight">
                        Oops! Page not found
                    </h2>
                    <p className="text-base text-gray-500 max-w-sm mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        🏠 Back To Home
                    </Link>
                    
                    <Link
                        href="/browse-ebook"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-sm font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        📚 All Ebooks
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;