import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import ProductCard from "./ProductCard";
import { ProductListContainer } from "../styled/StyledProductsPage";
import { useState } from "react/cjs/react.development";

const Cart = (props) => {
    const { productCart } = useContext(CartContext);

    return (
        <>
            { productCart.length > 0 ? (
                <ProductListContainer type="div">
                {productCart.map((product, index) =>
                    <>
                        <ProductCard 
                            title={product.product.title}
                            price={product.product.price}
                            imageUrl={product.product.image}
                            product={product} 
                            quantity={product.quantity}
                            index={index}/>
                    </>
                )}
                </ProductListContainer>
            ) : (
                <p>No items yet...</p>
            )}
        </>
    )
}

export default Cart;