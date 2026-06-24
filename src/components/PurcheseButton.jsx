'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';


export default function PurchaseButton() {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const handlePurchased = async () => {
        if (!user) return;

        // const {
        //     price,
        //      _id,
        //     writer_name,
        //     role,
        // } = books

        const purchasedData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            // price,
            // _id,
            // writer_name,
            // role,
        };

        // console.log(purchasedData);

        const res = await fetch('http://localhost:8000/PurchasedNow', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasedData)


        })
        const data = await res.json();
        console.log(data,  'success data');
        
    };



    return (
        <Button
            onClick={handlePurchased}
            className="w-full bg-indigo-600 text-white p-4 rounded cursor-pointer"
        >
            Book Now
        </Button>
    );
}