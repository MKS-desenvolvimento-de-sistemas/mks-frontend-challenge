import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsData, updateCartData } from "../state/actions/products";
import Loader from "../loader/Loader";
import Img from "../image/Image";
import BuyIcon from "./buyIcon";
import {Grid, Card, Button, TitlePrice} from '../../../styles';
import { MathNumber } from "../tools/math/MathNumber";

const ProductsList: React.FC = () => {
    const ProductsData = useSelector((state: any) => state?.products?.products?.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        await axios.get("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
        .then((res) => {
            dispatch(getProductsData(res.data))          
        })
    }

    useEffect(() => {
        fetchProducts()
    },[])
  
    return (
        <>         
            {
                (!ProductsData && ProductsData == undefined) ? 
                    <>
                        <Loader/>
                    </>
                    :
                   <Grid>
                     {ProductsData.map((individualProductData: any) => {
                        return (
                            <Card>  
                                <Img src={individualProductData.photo} width={130} height={138}  />
                                <TitlePrice>
                                    <h1>{individualProductData.name}</h1>
                                    <h2>{MathNumber(individualProductData.price)}</h2>
                                </TitlePrice>                                
                                <h3>Redesigned from scratch and completely revised.</h3>      
                                <Button onClick={() => dispatch(updateCartData(individualProductData))}>
                                  <BuyIcon />
                                  <p>COMPRAR</p>
                                </Button>                                                         
                            </Card >
                        )
                    })}  
                   </Grid>
            }            
        </>
    )
}

export default ProductsList;