export const fetchFeaturedEbook = async () =>{
    const res = await fetch ('http://localhost:8000/featuredBook')
    const data = await res.json();
    return data || [];
} 
// export const fetchMyPurchesed = async (email) =>{
//     const result = await fetch (`/PurchasedNow/:email/${email}`)
//    console.log(result, ' hello');
   
//     return result;
// } 