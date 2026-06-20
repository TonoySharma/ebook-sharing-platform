"use client"
import StatsDashboard from '@/components/Stats';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const ReaderDashBordPage = () => {

    const {data: seccion, isPanding} = useSession()

    if(isPanding){
        return <div>Loading...</div>
    }
    const user = seccion?.user
    // console.log(seccion,  "user seccion");
    
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Welcome back , <span className='text-pink-600'>{user?.name}</span></h1>
            <StatsDashboard></StatsDashboard>
        </div>
    );
};

export default ReaderDashBordPage;