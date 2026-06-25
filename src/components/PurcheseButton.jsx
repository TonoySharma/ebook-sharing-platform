'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';



export default function PurchaseButton({ book }) {
    // console.log(book);

    const { data: session } = authClient.useSession();
    const router = useRouter();
    const user = session?.user;

    const handlePurchased = async () => {

        // 1. User na thakle agei return korbe
        if (!user || !book) return;

        const purchasedData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            title: book?.title,
            description: book?.description,
            price: book?.price,
            image: book?.cover_image
        };

        // console.log(purchasedData);




        const res = await fetch('/api/subcription', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasedData)
        });
         
        const data = await res.json();
        router.push(data?.url)

        // console.log(data,  'success data');


        
        // const result = await fetch('/PurchasedNow', {
            
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(purchasedData)
        // });
    
        //     console.log(result, 'hello');
       
    };



    return (
        <Button
            onClick={handlePurchased}

            className="w-full bg-indigo-600 text-white p-4 rounded cursor-pointer" >
            Book Now
        </Button>
    );
}