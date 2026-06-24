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

    // তারিখ এবং সময় ফরম্যাট
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="min-h-screen bg-[#fafafa] py-16 px-4 sm:px-6 lg:px-8 font-sans text-neutral-900">
            <div className="max-w-3xl mx-auto">
                
          
                <div className="relative overflow-hidden rounded-[32px] border border-neutral-200/60 bg-white p-6 shadow-sm sm:p-10">
                    
             
                    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl" />
                    <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-gradient-to-br from-emerald-400/10 to-blue-400/10 blur-3xl" />

                    <div className="relative flex flex-col items-center border-b border-neutral-100 pb-8 text-center sm:flex-row sm:items-start sm:text-left gap-6">
                        
                        
                        <div className="relative h-24 w-24 shrink-0 rounded-2xl bg-neutral-100 p-1 ring-1 ring-neutral-200/80 shadow-inner">
                            <img
                                src={user?.image || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'}
                                alt={user?.name || 'User'}
                                className="h-full w-full rounded-[14px] object-cover"
                            />
                            <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                        </div>

                    
                        <div className="space-y-1.5 flex-1">
                            <div className="flex flex-col items-center gap-2 sm:flex-row">
                                <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
                                    {user?.name || 'Alex Morgan'}
                                </h1>
                                <span className="rounded-full bg-neutral-900 px-2.5 py-0.5 text-[11px] font-medium text-white tracking-wide">
                                    PRO MEMBER
                                </span>
                            </div>
                            <p className="text-sm text-neutral-500 font-medium">
                                {user?.email || 'alex.morgan@design.com'}
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        
                  
                        <div className="group rounded-2xl border border-neutral-100 bg-[#fbfbfb] p-5 transition-all duration-300 hover:border-neutral-200 hover:bg-white hover:shadow-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Date</span>
                                <span className="text-lg">📅</span>
                            </div>
                            <p className="mt-3 text-base font-medium text-neutral-800">
                                {currentDate}
                            </p>
                        </div>

                    
                        <div className="group rounded-2xl border border-neutral-100 bg-[#fbfbfb] p-5 transition-all duration-300 hover:border-neutral-200 hover:bg-white hover:shadow-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Logged In</span>
                                <span className="text-lg">⏰</span>
                            </div>
                            <p className="mt-3 text-base font-medium text-neutral-800">
                                {currentTime}
                            </p>
                        </div>

                        <div className="group rounded-2xl border border-neutral-100 bg-[#fbfbfb] p-5 transition-all duration-300 hover:border-neutral-200 hover:bg-white hover:shadow-sm sm:col-span-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">User Identification</span>
                                <span className="text-lg">🔒</span>
                            </div>
                            <p className="mt-3 font-mono text-xs text-neutral-500 truncate bg-white p-2.5 rounded-xl border border-neutral-200/40">
                                {user?.id || 'usr_94f8ba12c09e4d'}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-4">
                        <button className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-neutral-600
                         cursor-not-allowed bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
                            Security Settings
                        </button>
                        <button className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium cursor-pointer
                         text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-all shadow-sm active:scale-[0.98]">
                            Edit Profile
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;