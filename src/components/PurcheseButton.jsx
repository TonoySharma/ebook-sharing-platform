'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function PurchaseButton({ book }) {
    // console.log(book);

    const { data: session } = authClient.useSession();
    const router = useRouter();
    const user = session?.user;

  
    const [loading, setLoading] = useState(false);

    const handlePurchased = async () => {

        if (!user || !book) return;

   
        setLoading(true);

        const purchasedData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            title: book?.title,
            description: book?.description,
            price: book?.price,
            image: book?.cover_image
        };

        try {
            const res = await fetch('/api/subcription', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchasedData)
            });

            const data = await res.json();

            if (data?.url) {
                router.push(data?.url);
            } else {
             
                setLoading(false);
            }
        } catch (error) {
            console.error("Payment error:", error);
         
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handlePurchased}
            isLoading={loading} 
            disabled={loading}  
            className="w-full bg-indigo-600 text-white p-4 rounded cursor-pointer font-bold"
        >
            {loading ? 'Processing...' : 'Buy Now'} 
        </Button>
    );
}