import AllEbooks from '@/components/AllEbooks';
import React from 'react';


const EbooksPage = async () => {
    const res = await fetch('http://localhost:8000/api/ebooks', { cache: 'no-store' });
    const ebooks = await res.json();

    console.log(ebooks, 'EbooksPage');

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
                        Browse All Ebooks
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Easily find and explore books from your favorite authors and genres.
                    </p>
                </div>

         
                <AllEbooks initialEbooks={ebooks} />
            </div>
        </div>
    );
};

export default EbooksPage;