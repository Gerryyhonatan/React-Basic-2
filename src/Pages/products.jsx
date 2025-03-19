import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp. 1.000.000",
        image: "/public/images/Product1.jpg",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp. 1.200.000",
        image: "/public/images/Product1.jpg",
        description: "Lorem ipsum dolor sit amet. lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    }
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            
            {products.map((product) => (
                <CardProduct>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body name={product.name}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price}/>
                </CardProduct>
            )
            )}
        </div>
    )
}

export default ProductsPage