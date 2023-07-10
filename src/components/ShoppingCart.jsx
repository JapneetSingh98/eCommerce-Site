import React, { useState } from "react";

import Product from "./Product";

export default function ShoppingCart(props) {
    const [productsState, setProductsState] = useState({
        products: [
            { id: 1, productName: "iPhone", price: 1200, quantity: 0 },
            { id: 2, productName: "Sony Camera", price: 1200, quantity: 0 },
            { id: 3, productName: "Galaxy S10", price: 1200, quantity: 0 },
            { id: 4, productName: "Xbox", price: 1200, quantity: 0 },
            { id: 5, productName: "iPad Pro (2020)", price: 1200, quantity: 0 },
        ],
    });

    function handleIncrement(product, maxQuantity) {
        let allProducts = [...productsState.products];
        let indexOfProduct = allProducts.indexOf(product);

        if (allProducts[indexOfProduct].quantity < maxQuantity) {
            allProducts[indexOfProduct].quantity++;

            setProductsState(() => {
                return {
                    products: allProducts,
                };
            });
        }
    }

    function handleDecrement(product, minQuantity) {
        let allProducts = [...productsState.products];
        let indexOfProduct = allProducts.indexOf(product);

        if (allProducts[indexOfProduct].quantity > minQuantity) {
            allProducts[indexOfProduct].quantity--;

            setProductsState(() => {
                return {
                    products: allProducts,
                };
            });
        }
    }

    return (
        <React.Fragment>
            <h4 className="m-1 p-1">Shopping Cart</h4>
            <div className="container-fluid">
                <div className="row">
                    {productsState.products.map((product, i) => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                onIncrement={handleIncrement}
                                onDecrement={handleDecrement}
                            >
                                <button className="btn btn-primary">
                                    Buy Now
                                </button>
                            </Product>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}
