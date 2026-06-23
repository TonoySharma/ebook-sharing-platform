import AllEbooks from '@/components/AllEbooks';
import { getAllEbooks, getEbooks } from '@/lib/api/ebooks';
import React from 'react';

const EbooksPage = async ({ searchParams }) => {
  
    const params = await searchParams;
    const searchQuery = params?.search || '';
    const pageQuery = params?.page || 1;

    let displayEbooks = [];

  
    if (searchQuery) {
        displayEbooks = await getAllEbooks(searchQuery);
    } else {
        displayEbooks = await getEbooks(pageQuery);
    }

    // (Optional) Localhost theke fetch kora data jodi lagbe bole mone hoy, tahole thakbe, natha bad dite paren
    // const res = await fetch('http://localhost:8000/api/ebooks', { cache: 'no-store' });
    // const ebooks = await res.json();

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

                {/* 3. Ekhane dynamic content-ti pass kore din */}
                <AllEbooks initialEbooks={displayEbooks || []} />
            </div>
        </div>
    );
};

export default EbooksPage;