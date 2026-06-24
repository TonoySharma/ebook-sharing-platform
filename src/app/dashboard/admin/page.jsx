"use client";

import FadeUp from "@/components/FadeUp";
import { useState } from "react";

import { FaArrowDown, FaArrowUp, FaBell, FaChartLine, FaDollarSign, FaEllipsisV, FaSearch, FaShoppingBag, FaUserCheck, FaUsers } from "react-icons/fa";
// React Icons v6 package

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy State Data for Modern Look
  const stats = [
    { id: 1, title: "Total Revenue", value: "$48,259.50", change: "+12.5%", isPositive: true, icon: <FaDollarSign />, color: "from-emerald-500 to-teal-600" },
    { id: 2, title: "Active Users", value: "10,482", change: "+8.2%", isPositive: true, icon: <FaUsers />, color: "from-blue-500 to-indigo-600" },
    { id: 3, title: "New Signups", value: "1,204", change: "-2.1%", isPositive: false, icon: <FaUserCheck />, color: "from-violet-500 to-purple-600" },
    { id: 4, title: "Total Sales", value: "4,832", change: "+14.8%", isPositive: true, icon: <FaShoppingBag />, color: "from-amber-500 to-orange-600" },
  ];

  const recentUsers = [
    { name: "Anik Rahman", email: "anik@example.com", role: "Editor", status: "Active", date: "Today, 11:45 AM" },
    { name: "Sumaiya Islam", email: "sumaiya@example.com", role: "Writer", status: "Pending", date: "Today, 09:12 AM" },
    { name: "Tanvir Ahmed", email: "tanvir@example.com", role: "Admin", status: "Active", date: "Yesterday" },
    { name: "Nusrat Jahan", email: "nusrat@example.com", role: "Writer", status: "Suspended", date: "24 Jun 2026" },
  ];

  return (
    <div className="min-h-screen bg-slate-800 text-slate-100">
      
      {/* 1. Top Modern Navbar */}
      <FadeUp className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50 px-4 py-3 md:px-8 flex justify-between items-center">
        {/* Search Bar */}
        <div className="relative w-64 md:w-80 hidden sm:block">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
          <input 
            type="text" 
            placeholder="Search analytics, users..." 
            className="w-full bg-slate-900 border border-slate-800 rounded-full pl-9 pr-4 py-1.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-200 transition"
          />
        </div>

        {/* Dashboard Title / Logo for Mobile */}
        <div className="sm:hidden font-bold text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Admin.IO
        </div>

        {/* Right Nav Controls */}
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <button className="relative p-2 text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 rounded-full transition">
            <FaBell className="text-lg" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          </button>
          
          <div className="h-8 w-px bg-slate-800"></div>

          {/* Admin Profile */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-sm text-white shadow-md">
              AD
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold leading-none">Super Admin</p>
              <p className="text-xs text-slate-500 mt-1">admin@dashboard.com</p>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* 2. Main Body Content */}
      <FadeUp className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-8">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              Welcome Back, Chief
            </h1>
            <p className="text-sm text-slate-400 mt-1">Here&apos;s what&apos;s happening with your platform today.</p>
          </div>
          
          {/* Quick Date Actions */}
          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex gap-1 text-xs font-medium">
            <button className="px-3 py-1.5 rounded-lg bg-slate-800 text-white shadow">Today</button>
            <button className="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-300 transition">7 Days</button>
            <button className="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-300 transition">30 Days</button>
          </div>
        </div>

        {/* 3. Grid Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 shadow-xl relative overflow-hidden backdrop-blur-sm group hover:border-slate-700 transition duration-300"
            >
              {/* Decorative Subtle Background Glow */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 blur-xl group-hover:opacity-10 transition duration-300`}></div>
              
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-slate-400">{stat.title}</span>
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-white text-sm shadow-md`}>
                  {stat.icon}
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold tracking-tight text-white">{stat.value}</h3>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className={`text-xs font-semibold flex items-center gap-0.5 ${stat.isPositive ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'} px-1.5 py-0.5 rounded`}>
                    {stat.isPositive ? <FaArrowUp className="text-[10px]" /> : <FaArrowDown className="text-[10px]" />}
                    {stat.change}
                  </span>
                  <span className="text-[11px] text-slate-500">vs last month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Insights & Management Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Recent Registrations Card (Table layout) */}
          <div className="lg:col-span-2 bg-slate-950/60 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <div>
                <h2 className="text-base font-bold text-white">Recent Team Activity</h2>
                <p className="text-xs text-slate-500 mt-0.5">Manage and monitor latest onboarded staff.</p>
              </div>
              <button className="text-slate-400 hover:text-slate-200 p-1.5 hover:bg-slate-900 rounded-lg transition">
                <FaEllipsisV className="text-sm" />
              </button>
            </div>

            {/* Modern Clean Table Wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="pb-3 pl-2">User info</th>
                    <th className="pb-3">Role</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right pr-2">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-sm">
                  {recentUsers.map((user, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/30 transition group">
                      <td className="py-3 pl-2">
                        <div className="font-medium text-slate-200 group-hover:text-indigo-400 transition">{user.name}</div>
                        <div className="text-xs text-slate-500">{user.email}</div>
                      </td>
                      <td className="py-3 text-slate-400">{user.role}</td>
                      <td className="py-3">
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                          user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          user.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                          'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 text-right text-xs text-slate-500 pr-2">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Panel: Performance Analytics Graph Simulation */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <FaChartLine className="text-indigo-500" /> Platform Growth
                </h2>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+24% MoM</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Server traffic and visual processing performance analytics summary for this week.
              </p>

              {/* Modern Minimalist Mockup Bars Graph */}
              <div className="mt-8 flex items-end justify-between gap-2 h-36 px-2">
                {[40, 70, 55, 90, 65, 85, 100].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-full bg-slate-800 rounded-t-md relative overflow-hidden h-36 flex items-end">
                      <div 
                        style={{ height: `${height}%` }} 
                        className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-md transition-all duration-500 group-hover:from-indigo-500 group-hover:to-fuchsia-400"
                      ></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Upgrade Notification Area */}
            <div className="mt-6 p-3.5 bg-gradient-to-r from-slate-900 to-indigo-950/50 border border-indigo-900/40 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-200">System Version 4.2.1</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">All cloud nodes are optimal.</p>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                Live
              </span>
            </div>

          </div>

        </div>
      </FadeUp>

    </div>
  );
}