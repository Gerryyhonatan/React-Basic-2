import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp. 1.000.000",
        image: "/images/Product1.jpg",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp. 1.200.000",
        image: "/images/Product1.jpg",
        description: "Lorem ipsum dolor sit amet. lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    }
]

const email = localStorage.getItem('email')

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }

    return (
        <>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
            <Button color="bg-red-600 ml-5" onClick={handleLogout}>Logout</Button>    
        </div>
        <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body name={product.name}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price}/>
                </CardProduct>
            )
            )}
        </div>
        </>
    )
}

export default ProductsPage