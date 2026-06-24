"use client"


import Link from 'next/link'; 
import { Button } from "@heroui/react";
import FadeUp from '@/components/FadeUp';
import { authClient } from '@/lib/auth-client';


const PURCHASED_EBOOKS = [
  {
    id: 1,
    title: "The Midnight Library",
    writer_name: "Matt Haig",
    cover_image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
    details_link: "/ebooks/1"
  },
  {
    id: 2,
    title: "Project Hail Mary",
    writer_name: "Andy Weir",
    cover_image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=500&auto=format&fit=crop&q=60",
    details_link: "/ebooks/2"
  },
  {
    id: 3,
    title: "Sapiens: A Brief History of Humankind",
    writer_name: "Yuval Noah Harari",
    cover_image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
    details_link: "/ebooks/3"
  }
];

export default function PurchasedEbooks({ ebooks = PURCHASED_EBOOKS }) {


  return (
    <FadeUp>
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        
      
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#1a1a1a' }}>
          My Purchased eBooks ({ebooks.length})
        </h2>

   
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          
          {ebooks.map((book) => (
            <div 
              key={book.id} 
              className="ebook-card" 
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid #eef0f2',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
        
              <div style={{ position: 'relative', width: '100%', height: '280px', background: '#f5f5f5', overflow: 'hidden' }}>
                <img 
                  src={book.cover_image} 
                  alt={book.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

        
              <div style={{ padding: '16px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: '#1a1a1a',
                    margin: '0 0 4px 0',
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {book.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{book.writer_name}</p>
                </div>

             
                <div style={{ marginTop: 'auto' }}>
                  <Link href={book.details_link} passHref style={{ textDecoration: 'none' }}>
                    <Button 
                      variant="flat" 
                      color="primary" 
                      fullWidth
                      style={{ 
                        fontWeight: '500',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                    >
                      Read / View Details
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

 
      <style jsx global>{`
        .ebook-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </FadeUp>
  );
}