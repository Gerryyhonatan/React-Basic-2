import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header/>
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat in maiores earum voluptatum sapiente!
                </CardProduct.Body>
                <CardProduct.Footer/>
            </CardProduct>
        </div>
    )
}

export default ProductsPage