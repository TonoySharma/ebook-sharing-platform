import { fetchFeaturedEbook } from '@/lib/ebook/data';
import React from 'react';

const LatestEbooks = async () => {
     const ebooks = await fetchFeaturedEbook();
     console.log(ebooks,  'last 6 ebooks');
     
    return (
        <div>
            <h1>latest 6 ebooks</h1>
        </div>
    );
};

export default LatestEbooks;