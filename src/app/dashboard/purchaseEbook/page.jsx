import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Link from 'next/link';

const PurcheseEbookPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    // console.log(session);

    const user = session?.user;
    // console.log(user,   'user');
    

    const res = await fetch(`http://localhost:8000/PurchasedNow/${user?.id}`, {
        cache: 'no-store' 
    });

    const data = await res.json();
    // console.log(data,   'data');

  
    const totalBooks = data?.length || 0;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        
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

        
            {totalBooks === 0 ? (
                <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
                    <div className="text-gray-400 mb-3 text-4xl">📚</div>
                    <h3 className="text-lg font-semibold text-gray-900">No Books Found</h3>
                    <p className="text-gray-500 mt-1 text-sm">You haven&apos;t purchased any ebooks yet.</p>
                    <div className="mt-6">
                        <Link 
                            href="/shop" 
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
                        >
                            Browse Ebooks
                        </Link>
                    </div>
                </div>
            ) : (
             
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {data.map((ebook) => (
                        <div 
                            key={ebook.id} 
                            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                           
                           <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={ebook.coverImage || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400'} 
                                    alt={ebook.title}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                      
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                    {ebook.title}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 line-clamp-2 flex-1">
                                    {ebook.description || 'Click details to start reading this amazing book.'}
                                </p>
                                
                            
                                <div className="mt-5">
                                    <Link 
                                       href={`/ebooks/${ebook._id}`}
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
                </div>
            )}
        </div>
    );
};

export default PurcheseEbookPage;