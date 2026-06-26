"use client"
import { useState, useEffect } from 'react';

export default function BookmarkPage() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

  
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBookmarkedBooks(savedBookmarks);
  }, []);


  const removeBookmark = (id) => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const updatedBookmarks = savedBookmarks.filter((book) => book.id !== id);
    setBookmarkedBooks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Bookmarks</h1>

      {bookmarkedBooks.length === 0 ? (
        <p className="text-gray-500">No bookmarks added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookmarkedBooks.map((book) => (
            <div key={book.id} className="p-4 border rounded-2xl shadow-sm bg-white relative">
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{book.author}</p>
              
           
              <button 
                onClick={() => removeBookmark(book.id)}
                className="mt-4 w-full text-center py-2 bg-red-50 text-red-600 font-medium rounded-lg text-sm hover:bg-red-100 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}