import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (limit = 6) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?page=1&rows=${limit}&sortBy=id&orderBy=DESC`);
  
  if(!response.ok){
    throw new Error('Network response was not ok.');
  };

  const data = await response.json();
 
  return data;
};

const useProducts = (limit: number) => {
  return useQuery({
    queryKey: ['products', 5],
    queryFn: () => fetchProducts(limit),
  });
};

export { useProducts, fetchProducts };