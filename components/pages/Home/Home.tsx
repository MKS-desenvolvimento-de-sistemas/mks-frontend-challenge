import Head from "next/head";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
import { useCallback, useEffect, useState } from "react";
import mks, { Product } from "../../../integrations/mks";
import ShoppingCartDrawer from "@/components/ShoppingCartDrawer/ShoppingCartDrawer";
import { mockProducts } from "../../../test/utils";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    try {
      const fetchedProducts = await mks.fetchProducts({
        page: 1,
        rows: 50,
        sortBy: "id",
        orderBy: "ASC",
      });

      if (fetchedProducts) {
        setProducts(fetchedProducts);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts().catch(() => {
      console.error("Falha ao carregar produtos");
    });
  }, [fetchProducts]);

  return (
    <>
      <Head>
        <title>MKS Sistemas | E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onOpenCart={openDrawer} />

      <main>
        <Products loading={loading} products={products} />
      </main>

      <ShoppingCartDrawer
        products={mockProducts}
        visible={drawerVisible}
        onClose={closeDrawer}
      />
    </>
  );
}
