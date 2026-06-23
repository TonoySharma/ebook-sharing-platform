import React from 'react';

export default function StatsDashboard() {
    // Dynamic value add korar jonno cards list-e "value" property track kora holo
    const statCards = [
        { id: 1, title: 'Purchased Books', value: '12', icon: '📚', color: 'from-purple-500/10 to-indigo-500/10', textColor: 'group-hover:text-indigo-600' },
        { id: 2, title: 'Bookmarked', value: '24', icon: '⭐', color: 'from-amber-500/10 to-yellow-500/10', textColor: 'group-hover:text-amber-600' },
        { id: 3, title: 'Authors Followed', value: '8', icon: '✍️', color: 'from-pink-500/10 to-rose-500/10', textColor: 'group-hover:text-pink-600' },
        { id: 4, title: 'Reading Streak', value: '5 Days', icon: '🔥', color: 'from-orange-500/10 to-red-500/10', textColor: 'group-hover:text-orange-600' },
    ];

    const activities = [
        { text: 'Purchased The Last Ember of Valtheria', time: '2 hours ago', type: 'purchase' },
        { text: 'Bookmarked Echoes of Midnight', time: '5 hours ago', type: 'bookmark' },
        { text: 'Finished reading The Silent Garden', time: 'Yesterday', type: 'read' },
    ];

    return (
        <div className="min-h-screen p-4 sm:p-6 text-black font-sans antialiased">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* --- Stats Section --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {statCards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative bg-white backdrop-blur-md border border-zinc-200 border-dashed rounded-2xl p-5 flex flex-col justify-between h-36 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] overflow-hidden"
                        >
                            {/* Gradient Background Effect on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10 flex items-center justify-between w-100 w-full">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 border-dashed group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl">{card.icon}</span>
                                </div>
                                {/* Dynamic Stats Number Display */}
                                <span className={`text-2xl font-bold text-zinc-900 transition-colors duration-300 ${card.textColor}`}>
                                    {card.value}
                                </span>
                            </div>

                            <h3 className="relative z-10 text-zinc-600 font-medium text-sm group-hover:text-black transition-colors duration-300">
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* --- Recent Activity Section --- */}
                <div className="bg-white border border-zinc-200 border-dashed rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-5">
                        <h4 className="text-xs font-bold text-zinc-400 tracking-wider uppercase">
                            Recent Activity
                        </h4>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>

                    <div className="divide-y divide-zinc-100">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 first:pt-0 last:pb-0 group"
                            >
                                <div className="flex items-center gap-3">
                                    {/* Small circle dot for activity design */}
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-zinc-600 transition-colors" />
                                    <span className="text-zinc-700 text-sm font-medium group-hover:text-zinc-900 transition-colors duration-200">
                                        {activity.text}
                                    </span>
                                </div>
                                <span className="text-xs text-zinc-400 sm:pl-0 pl-4 whitespace-nowrap">
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