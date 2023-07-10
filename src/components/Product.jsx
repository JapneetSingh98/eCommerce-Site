import React, { useState } from "react";

export default function Product(props) {
    const [product, setProduct] = useState({
        id: props.product.id,
        productName: props.product.productName,
        price: props.product.price,
        quantity: props.product.quantity,
    });

    return (
        <React.Fragment>
            <div className="col-xl-4 col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted"># {product.id}</div>
                        <h5 className="p-2 border-top">
                            {product.productName}
                        </h5>
                        <div>${product.price}</div>
                    </div>
                    <div className="card-footer">
                        <div className="float-start">
                            <span className="badge text-bg-light">
                                {product.quantity}
                            </span>
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => props.onDecrement(props.product)}
                                >
                                    -
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => props.onIncrement(props.product)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="float-end">{props.children}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
