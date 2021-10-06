import "./index.css";
// css는 export 기능이 없는데 이 경우 from 안쓰면 됨
import axios from "axios";
import React from "react";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  //   usestate를 통해 products마다 업데이트. 그런데 axios도 반복하니 이건 useEffect로 방지
  React.useEffect(function () {
    axios
      .get(
        "https://f64a417d-7798-4533-8744-1bef7c08f718.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생: ", error);
      });
  }, []);
  //   axios 네트워크 통신은 딱 1번만 한다. 그리고 products

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="main">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            //   map은 products에서 product라는 새로운 배열을 반환해주는 메소드
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imgUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
