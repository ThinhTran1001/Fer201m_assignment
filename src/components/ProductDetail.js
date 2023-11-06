import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import './css/product.css';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id: productId } = useParams();
  const [productData, setProductData] = useState(null);

  function formatPrice(price) {
    price = (price + "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    price = price + " VND";

    return price;
  }
  useEffect(() => {
    // Fetch the product data from the API endpoint based on the product ID
    fetch(`http://localhost:9999/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error('Error fetching product data:', error));
  }, [productId]); // Include productId in the dependency array to refetch data when productId changes

  if (!productData) {
    return <div>Loading...</div>; // You can render a loading spinner or message while data is being fetched
  }

  const { name, img, detail, price } = productData;
  console.log(img);
  return (
    <section className="section-content padding-y bg">
      <div className="container">
        <article className="card">
          <div className="card-body">
            <div className="row">
              <aside className="col-md-6">
                <article className="gallery-wrap">
                  <div className="card img-big-wrap">
                    <a href="#">
                      <Image src={img} alt={name} />
                    </a>
                  </div>
                </article>
              </aside>
              <main className="col-md-6">
                <article>
                  <h3 className="title">{name}</h3>
                  <hr />
                  <div className="mb-3">
                    <h6>{detail}</h6>
                  </div>
                  <div className="mb-3">
                    <var>Giá niêm yết:</var>
                    <div className="mb-3">
                      <var className="price h4" style={{ color: 'red' }}>
                        {formatPrice(price)}
                      </var>{' '}
                      <br />
                    </div>
                  </div>
                  <div className="mb-4">
                    <a href="/cart" className="btn btn-muangay">
                      Mua ngay
                    </a>
                    <a href="#" className="btn btn-themgio">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </article>
              </main>
            </div>
            </div>
        </article>
      </div>
    </section>
  );
}