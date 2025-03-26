import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    }, [id])

    return (
        <div className="justify-center items-center flex min-h-screen">
            {Object.keys(product).length > 0 && (
                <div className="flex grid-cols-2 max-w-screen-md mx-auto bg-slate-200 rounded-lg items-center">
                <div >
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="ml-5">
                    <div>
                        <h1>{product.title}</h1>
                    </div>
                    <div>
                        <h3>{product.price}</h3>
                        <p>{product.description}</p>
                        <p>{product.category}</p>
                    </div>
                    <div>
                        <h4>Rating: {product.rating.rate}</h4>
                    </div>
                </div>
            </div>
            ) }
        </div>
    )
}

export default DetailProductPage;