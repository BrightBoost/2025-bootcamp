import { useEffect, useState } from "react";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data["products"]);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <p>Loading....</p>;
    }

    return (
        <div>
            <h2>The products</h2>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;