export default function ProductData({ data }) {
  console.log(data);
  return (
    <>
      <div className="card content-wrapper">
        <img
          src={data.images[0].src}
          className="product-image m-auto"
          alt="hair prods"
        />
        <div className="card-body">
          <h4>{data.title}</h4>
          <p className="card-text fs-4">${data.variants[0].price}</p>
        </div>
      </div>
    </>
  );
}
