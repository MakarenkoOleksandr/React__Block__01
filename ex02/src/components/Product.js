const Product = ({ name, image, price, onSale }) => (
  <div className="product">
    <h2 className="product__name">{name}</h2>
    <img className="product__img" src={image} alt={name} />
    <p className="product__price">
      {onSale ? `SALE!!! ${price} $` : `${price} $`}$
    </p>
  </div>
);

export default Product;
