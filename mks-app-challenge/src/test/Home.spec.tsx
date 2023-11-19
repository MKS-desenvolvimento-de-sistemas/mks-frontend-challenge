import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "@/pages/index";
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from '@/Context/CartContext';
import { Provider } from 'react-redux';

import store from '@/Redux/store';
import { fetchProducts } from "@/api/fetchProducts";
import { waitFor } from "@testing-library/dom";

jest.mock('../api/fetchProducts', () => ({
    fetchProducts: jest.fn(() => Promise.resolve([{ id: 1, name: 'Product 1', price: 'Dez Reais', description: 'Description 1' }])),
}));

const queryClient = new QueryClient();

describe('Home Component', () => {
    it('calls fetchProducts when rendered', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <CartProvider>
                        <Home />
                    </CartProvider>
                </Provider>
            </QueryClientProvider>
        );

        await waitFor(() => screen.findByText('Product 1'), { timeout: 5000 });


        expect(fetchProducts).toHaveBeenCalled();
    });
});
