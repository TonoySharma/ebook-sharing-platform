import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    console.log(session);

    const user = session?.user;
    console.log(user, 'user');

  
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          
            <div className="mb-8 border-b border-gray-100 pb-5">
                <h1 className="text-3xl font-bold tracking-tight text-gray-950">
                    Profile Management
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    Manage your personal information, security, and account settings.
                </p>
            </div>

          
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-100/40">
             
                <div className="h-32 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

                <div className="relative px-6 pb-8 sm:px-8">
               
                    <div className="absolute -top-16 left-6 sm:left-8">
                        <div className="h-28 w-28 rounded-2xl border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                            <img
                                src={user?.image || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'}
                                alt={user?.name || 'User'}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                 
                    <div className="pt-16 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {user?.name || 'Guest User'}
                            </h2>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                                {user?.email || 'No email associated'}
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <span className="inline-flex items-center rounded-xl bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/10">
                                Active Session
                            </span>
                        </div>
                    </div>

                 
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 border-t border-gray-50 pt-8">
                      
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100/50">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                                📅
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Current Date</p>
                                <p className="text-sm font-semibold text-gray-800 mt-0.5">{currentDate}</p>
                            </div>
                        </div>

               
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100/50">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl">
                                ⏰
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Login Time</p>
                                <p className="text-sm font-semibold text-gray-800 mt-0.5">{currentTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;