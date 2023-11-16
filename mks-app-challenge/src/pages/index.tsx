import {
    BoxCards,
    BuyButton,
    CardsProducts,
    ImageCard,
    ProductBox,
    ProductDescription,
    ProductInfo,
    ProductPrice,
    BoxNamePrice,
    SkeletonBox
}
    from "@/styles/Home.style";
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { fetchProducts } from "./api/fetchProducts";
import ShoppingBag from "@/assets/shopping-bag.svg";
import Image from "next/image";
import { DataApi, Product } from "@/@types/Products";
import { StyledEngineProvider } from '@mui/material/styles';
import SkeletonComponent from '@/components/Skeleton/index'


const Home = () => {
    const { data: products, isLoading, isError } = useQuery('products', () => fetchProducts(1, 8));
    if (isLoading) {
        return (

            <SkeletonBox>

                <StyledEngineProvider injectFirst>
                    <SkeletonComponent />
                    <SkeletonComponent />
                    <SkeletonComponent />
                    <SkeletonComponent />
                    <SkeletonComponent />
                    <SkeletonComponent />
                    <SkeletonComponent />
                    <SkeletonComponent />
                </StyledEngineProvider>

            </SkeletonBox>

        )

    }

    if (isError || !products) {
        console.log(products);
        console.log('isError:', isError);

        return <div>Ocorreu um erro ao buscar os produtos.</div>
    }

    const queryClient = new QueryClient

    queryClient.invalidateQueries('products');




    return (

        <BoxCards>

            {Array.isArray(products) && products.length > 0 && products.map((product: DataApi) => (

                <CardsProducts key={product.id}>

                    <ImageCard>
                        <Image src={product.photo} alt={product.name} width={111} height={120} />
                    </ImageCard>




                    <ProductBox>

                        <BoxNamePrice>
                            <ProductInfo>
                                {product.name}
                            </ProductInfo>

                            <ProductPrice>
                                {`R$${product.price}`}
                            </ProductPrice>

                        </BoxNamePrice>

                        <ProductDescription>

                            {product.description}

                        </ProductDescription>



                    </ProductBox>



                    <BuyButton>
                        <Image src={ShoppingBag} alt="shoppingbag" />

                        COMPRAR
                    </BuyButton>




                </CardsProducts>

            ))}

        </BoxCards>







    )
}

export default Home;