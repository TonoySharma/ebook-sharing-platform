"use client";

import FadeUp from "@/components/FadeUp";
import React, { useState } from "react";
import { FaBold, FaHeading, FaImage, FaItalic, FaListUl, FaPenNib, FaRegEye, FaSave, FaTrashAlt } from "react-icons/fa";
import { FaSprayCanSparkles } from "react-icons/fa6";


export default function WriterDashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Blog");
  const [isPreview, setIsPreview] = useState(false);

  // Dummy auto-save ba draft functionality-r jonno
  const handleSaveDraft = () => {
    alert("Draft saved successfully! (Mockup)");
  };

  const handlePublish = (e) => {
    e.preventDefault();
    alert(`Publishing: ${title} under ${category}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 text-slate-800">
      {/* Top Header */}
      <FadeUp className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-slate-900">
            <FaPenNib className="text-indigo-600" /> Writer&apos;s Studio
          </h1>
          <p className="text-sm text-slate-500 mt-1">Create, edit, and polish your next masterpiece.</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button 
            onClick={() => setIsPreview(!isPreview)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
          >
            <FaRegEye /> {isPreview ? "Edit Mode" : "Preview"}
          </button>
          <button 
            onClick={handleSaveDraft}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
          >
            <FaSave /> Save Draft
          </button>
          <button 
            onClick={handlePublish}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition shadow-sm"
          >
            Publish
          </button>
        </div>
      </FadeUp>

      {/* Main Workspace */}
      <FadeUp className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Side: Editor Area */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Toolbar (Only visible when not in preview mode) */}
          {!isPreview && (
            <div className="flex flex-wrap items-center gap-2 p-3 border-b border-slate-200 bg-slate-50">
              <button title="Heading" className="p-2 text-slate-600 hover:bg-slate-200 rounded transition"><FaHeading /></button>
              <button title="Bold" className="p-2 text-slate-600 hover:bg-slate-200 rounded transition font-bold"><FaBold /></button>
              <button title="Italic" className="p-2 text-slate-600 hover:bg-slate-200 rounded transition italic"><FaItalic /></button>
              <button title="Bullet List" className="p-2 text-slate-600 hover:bg-slate-200 rounded transition"><FaListUl /></button>
              <button title="Insert Image" className="p-2 text-slate-600 hover:bg-slate-200 rounded transition"><FaImage /></button>
              <span className="h-6 w-px bg-slate-300 mx-1"></span>
              <button title="AI Assist" className="flex items-center gap-1 px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-semibold hover:bg-violet-200 transition">
                <FaSprayCanSparkles /> AI Write
              </button>
            </div>
          )}

          {/* Editor Input / Preview Block */}
          <div className="p-6 flex-1 min-h-[400px]">
            {isPreview ? (
              // Preview Mode
              <article className="prose max-w-none">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-4">{title || "Untitled Document"}</h1>
                <div className="text-xs text-indigo-600 font-medium uppercase tracking-wider mb-6">{category}</div>
                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {content || "Kichu lekha hoyni ekhono. Edit mode-e giye lekhun!"}
                </p>
              </article>
            ) : (
              // Edit Mode
              <div className="space-y-4 h-full flex flex-col">
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a catchy title..." 
                  className="w-full text-2xl md:text-3xl font-bold border-none outline-none focus:ring-0 placeholder-slate-300 text-slate-900"
                />
                <hr className="border-slate-100" />
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Start writing your story here..." 
                  className="w-full flex-1 min-h-[350px] border-none outline-none focus:ring-0 placeholder-slate-300 text-slate-700 resize-none leading-relaxed"
                />
              </div>
            )}
          </div>

          {/* Word Count Footer */}
          <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-between items-center text-xs text-slate-400">
            <span>Words: {content.trim() === "" ? 0 : content.trim().split(/\s+/).length}</span>
            <span>Characters: {content.length}</span>
          </div>
        </div>

        {/* Right Side: Sidebar Settings */}
        <div className="space-y-6">
          {/* Publishing Settings Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Post Settings</h3>
            
            {/* Category Selector */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-2">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg text-sm focus:outline-none focus:border-indigo-500 text-slate-700"
              >
                <option value="Blog">Blog Post</option>
                <option value="Article">Article</option>
                <option value="News">News</option>
                <option value="Tutorial">Tutorial</option>
              </select>
            </div>

            {/* Tags Input Mockup */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-2">Tags</label>
              <input 
                type="text" 
                placeholder="tech, react, coding..." 
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 text-slate-700"
              />
            </div>
          </div>

          {/* Delete Action Card */}
          <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-red-800">Move to Trash</h4>
              <p className="text-xs text-red-600/70 mt-0.5">This action can be undone.</p>
            </div>
            <button 
              onClick={() => { setTitle(""); setContent(""); }}
              className="p-3 text-red-600 hover:bg-red-100 rounded-lg transition"
              title="Clear content"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>

      </FadeUp>
    </div>
  );
}