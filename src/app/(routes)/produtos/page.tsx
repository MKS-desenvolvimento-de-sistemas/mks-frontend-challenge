"use client"

import ProductComponent from "@/components/product";

const api = {
  products: {
    id: 1,
    name: "iPhone X 128 GB",
    brand: "Apple",
    description: "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes",
    price: 2000.1
  },
  count: 1
};

const Page = () => {
  return (
    <div>
      <ProductComponent
        id={api.products.id}
        name={api.products.name}
        brand={api.products.brand}
        description={api.products.description}
        price={api.products.price}
      />
    </div>
  );
};

export default Page;