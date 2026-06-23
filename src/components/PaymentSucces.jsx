"use client"
import React from 'react';

const SuccessPaymentPage = ({ customerEmail = "user@example.com" }) => {
  return (
    <div className=" bg-slate-50 flex my-8  justify-center p-4 antialiased">
      <div className="max-w-md w-full bg-gray-100 rounded shadow-xl shadow-slate-100 border
       border-gray-200 p-8 text-center relative overflow-hidden group">
        
        
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-emerald-100/80 animate-ping scale-80 opacity-80"></div>
          <svg 
            className="h-10 w-10 text-emerald-500 relative z-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

  
        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight sm:text-3xl">
          Payment Successful!
        </h2>
        <p className="mt-3 text-sm text-slate-500 font-medium">
          Thank you for your order. We appreciate your business!
        </p>

        <div className="mt-6 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Confirmation Email
          </span>
          <p className="text-sm text-slate-600 leading-relaxed break-all">
            A receipt and order details have been sent to:{' '}
            <strong className="text-slate-800 font-semibold">{customerEmail}</strong>
          </p>
        </div>

   
        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            Have any questions or facing issues?
          </p>
          <a 
            href="mailto:orders@example.com" 
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </a>
        </div>

   
        <div className="mt-6">
          <button 
            onClick={() => window.location.href = '/browse-ebook'}
            className="w-full py-3 px-4 inline-flex cursor-pointer justify-center items-center gap-x-2 text-sm font-semibold rounded border border-transparent bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 focus:outline-none shadow-md shadow-slate-900/10"
          >
            Go to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default SuccessPaymentPage;