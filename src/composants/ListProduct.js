import '../utils/css/listProduct.css'

export default function ListProduct(props) {

    return (
        <div className='container-products-global'>
        {props.json.map((product, index) => (
            <div className='container-product' key={index}>
                <img className='img-product' src={product.url} alt={product.name} />
                <h2 className='title-product'>{product.name}</h2>
                <p className='text-product'>{product.description}</p>
            </div>
        ))}
    </div>
    )
}