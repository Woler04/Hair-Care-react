import { useEffect, useState, useRef } from "react";
import ProductData from "./ProductData"; // Your child display component
import Slider from "react-slick"; // Import Slider component

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jeval.com.au/collections/hair-care/products.json?page=1")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  const sliderRef = useRef();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleWheel = (e) => {
    if (!sliderRef.current) return;

    if (e.deltaY < 0) {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="container position-relative">
      <div className="row d-flex align-items-stretch" onWheel={handleWheel}>
        {loading ? (
          <p>Loading content...</p>
        ) : (
          <Slider ref={sliderRef} {...sliderSettings}>
            {/* The Info Card as the first slide */}
            <div key="info-card-slide" className="col-lg-4 p-xl-3 pb-3">
              <div className="info-card text-center h-100 d-flex flex-column">
                <div className="content-wrapper card-body flex-grow-1">
                  <h4>Daily routine</h4>
                  <p className="card-text">
                    Perfect for if you're looking for soft, nourished skin, our
                    moisturizing body washes are made with skin-natural
                    nutrients that work with your skin to replenish moisture.
                    With a light formula, the bubbly lather leaves your skin
                    feeling cleansed and cared for. And by choosing relaxing
                    fragrances you can add a moment of calm to the end of your
                    day.
                  </p>
                </div>
              </div>
            </div>
            {products.splice(1, 8).map((product) => (
              <div key={product.id} className="col-lg-4 p-xl-3 pb-3">
                <div className="product-card text-center h-100 d-flex flex-column">
                  <ProductData data={product} />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
