"use client"
import StatsDashboard from '@/components/Stats';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const ReaderDashBordPage = () => {

    const {data: seccion, isPanding} = useSession()

    if(isPanding){
        return <div>Loading...</div>
    }
    const user = seccion?.user
    // console.log(seccion,  "user seccion");
    
    return (
       <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-300">
    {/* Header Section */}
    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                Welcome back,{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 font-extrabold hover:scale-105 transition-transform duration-200 cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-pink-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                    {user?.name || 'Guest'}
                </span>
               
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Here&apos;s what&apos;s happening with your account today.
            </p>
        </div>

    </div>


    <div className="mt-4">
        <StatsDashboard />
    </div>
</div>
    );
};

export default ReaderDashBordPage;