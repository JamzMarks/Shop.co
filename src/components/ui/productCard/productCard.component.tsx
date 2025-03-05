

function ProductCard(){
    const product = {
        id: 6,
        title: "SKINNY FIT JEANS 2",
        price: 350,
        image: "assets/images/products/pants1.png",
        discount: 15,
        rating: 3
      }

    return(
        <article className="productCard">
            <div className="img-container">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="details">
                <h3><a href="">{product.title}</a></h3>
                <div className="rate-wrapper">
                    <div className="star-wrapper">

                    </div>
                    <p>{product.rating}/5</p>
                </div>
                <div className="price-wrapper">
                    <p>{product.price}</p>
                    <p>{product.price}</p>
                    <div className="discount">
                        <span>{product.discount}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard;