import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (limit = 6) => {
  const parsed = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);

  console.log(parsed);
  
  return parsed;
};

const useProducts = (limit: number) => {
  return useQuery({
    queryKey: ['products', 5],
    queryFn: () => fetchProducts(limit),
  });
};

export { useProducts, fetchProducts };