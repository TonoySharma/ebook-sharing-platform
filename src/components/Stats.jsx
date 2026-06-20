import React from 'react';

export default function StatsDashboard() {

    const statCards = [
        { id: 1, title: 'Purchased Books', icon: '📚', color: 'from-purple-500/10 to-indigo-500/10' },
        { id: 2, title: 'Bookmarked', icon: '⭐', color: 'from-amber-500/10 to-yellow-500/10' },
        { id: 3, title: 'Authors Followed', icon: '✍️', color: 'from-pink-500/10 to-rose-500/10' },
        { id: 4, title: 'Reading Streak', icon: '🔥', color: 'from-orange-500/10 to-red-500/10' },
    ];


    const activities = [
        { text: 'Purchased The Last Ember of Valtheria', time: '2 hours ago' },
        { text: 'Bookmarked Echoes of Midnight', time: '5 hours ago' },
        { text: 'Finished reading The Silent Garden', time: 'Yesterday' },
    ];

    return (
        <div className="min-h-screen  p-6 text-black font-sans antialiased">
            <div className="max-w-6xl mx-auto space-y-8">


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {statCards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative backdrop-blur-md border border-zinc-800/20 border-dashed rounded-2xl p-5 flex flex-col justify-between h-36 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/10 border border-zinc-800/20 border-dashed group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl">{card.icon}</span>
                            </div>

                            {/* এখানে group-hover:text-black করে দেওয়া হয়েছে */}
                            <h3 className="relative z-10 text-zinc-800 font-medium text-sm group-hover:text-black transition-colors duration-300">
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className=" backdrop-blur-md border border-zinc-800/20 border-dashed rounded-2xl p-6 shadow">
                    <h4 className="text-sm font-semibold text-zinc-800 tracking-wider uppercase mb-4">Recent Activity</h4>
                    <div className="divide-y divide-zinc-800/60">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 first:pt-2 last:pb-2 group"
                            >
                                <span className="text-zinc-500 text-sm font-medium  transition-colors duration-200">
                                    {activity.text}
                                </span>
                                <span className="text-xs text-zinc-500 whitespace-nowrap">
                                    {activity.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}