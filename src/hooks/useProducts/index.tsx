import { useQuery } from "@tanstack/react-query";
import fetchProdutsProps from "./style";
import { useState } from "react";

const fetchProducts = async (limit: number) => {
  console.log(`Fetching products with limit: ${limit}`);
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?page=1&rows=${limit}&sortBy=id&orderBy=DESC`);
  
  if(!response.ok){
    throw new Error('Network response was not ok.');
  };

  const data = await response.json();
 
  return data;
};


const useProducts = (limit: number) => {
  return useQuery({
    queryKey: ['products', limit],
    queryFn: () => fetchProducts(limit),
    staleTime: 1800000,
  });
};

export { useProducts, fetchProducts };