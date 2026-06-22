export const fetchFeaturedEbook = async () =>{
    const res = await fetch ('http://localhost:8000/featuredBook')
    const data = await res.json();
    return data || [];
} 