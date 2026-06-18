import React from 'react';

const Marquee = () => {
  const items = [
    "EBOOK SHARING PLATFORM",
    "BOOK CAFE",
    "BOOK CLUB",
    "BOOKSHOP",
    "ONLINE READER",
    "MEDIA LIBRARY",
    "PUBLISHING",
    "STORE",
    "PUBLISHING HOUSE",
    "WOOCOMMERCE",
    "SHOP",
    "EBOOK",
    "AUTHOR",
    "EBOOKS",
    "READING",
  
  ];

  const StarIcon = () => (
    <span className="mx-6 text-sm text-orange-200 opacity-80 select-none">✦</span>
  );

  return (
    <div className="w-full overflow-hidden bg-[#0a0a0a] py-8 border-y border-stone-800 flex flex-nowrap select-none">
   
      <div className="flex whitespace-nowrap animate-marquee reduction-motion:none">
        
       
        <div className="flex items-center shrink-0 pr-4">
          {items.map((item, index) => (
            <div key={`set1-${index}`} className="flex items-center">
              <span className="text-stone-300 font-serif text-sm tracking-[0.2em] font-medium">
                {item}
              </span>
              <StarIcon />
            </div>
          ))}
        </div>


        <div className="flex items-center shrink-0 pr-4">
          {items.map((item, index) => (
            <div key={`set2-${index}`} className="flex items-center">
              <span className="text-stone-300 font-serif text-sm tracking-[0.2em] font-medium">
                {item}
              </span>
              <StarIcon />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Marquee;