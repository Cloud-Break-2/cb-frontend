import React from "react";
import "../styles/eventpage.css";
import firstImage from "../assets/images/products/firstimage.webp";
import saleProduct1 from "../assets/images/products/saleproducts1.webp";
import saleProduct2 from "../assets/images/products/saleproducts2.webp";
import saleProduct4 from "../assets/images/products/saleproducts4.webp";
import saleProduct5 from "../assets/images/products/saleproducts5.webp";
import saleProduct6 from "../assets/images/products/saleproducts6.webp";
import saleProduct7 from "../assets/images/products/saleproducts7.webp";
import saleProduct8 from "../assets/images/products/saleproducts8.webp";
import saleProduct9 from "../assets/images/products/saleproducts9.webp";
import saleProduct10 from "../assets/images/products/saleproducts10.webp";
import saleProduct11 from "../assets/images/products/saleproducts11.webp";
import saleProduct12 from "../assets/images/products/saleproducts12.webp";
import couponImage from "../assets/images/products/네고왕.webp";
const EventPage = () => {
  const saleimges = [
    [saleProduct1, 70],
    [saleProduct2, 51],
    [saleProduct4, 64],
    [saleProduct5, 53],
    [saleProduct6, 68],
    [saleProduct7, 62],
    [saleProduct8, 58],
    [saleProduct9, 50],
    [saleProduct10, 40],
    [saleProduct11, 62],
    [saleProduct12, 62],
  ];
  function getCookieValue(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function handleButtonClick(monney) {
    const token = getCookieValue("token");

    if (!token) {
      alert("로그인 후 이용가능합니다");
      window.location.href = "/login"; // 로그인 페이지의 경로로 변경하세요
    } else {
      alert(`네고왕 X 카카오쇼핑 ${monney}원 쿠폰이 발급되었습니다. `);
    }
  }

  return (
    <div className="layout">
      <div className="imagewrapper">
        <img src={firstImage} alt="Event" />
      </div>
      <div className="main-text">네고왕 x 카카오 상품 선착순 할인쿠폰</div>
      <div className="containers-layout">
        <div className="containers">
          <div onClick={() => handleButtonClick(5000)} className="items">
            <div className="items-main">
              <div className="coupon-image">
                <img src={couponImage} alt="네고왕" />
              </div>
              <div className="sale-text">
                <div>5000원 쿠폰</div>
                <div>(5만원 이상 구매시)</div>
                <div>2024.09.20까지 </div>
              </div>
            </div>
            <div>선착순 쿠폰이 조기 마감될 수 있으니 서둘러 주세요.</div>
          </div>
          <div onClick={() => handleButtonClick(3000)} className="items">
            <div className="items-main">
              <div className="coupon-image">
                <img src={couponImage} alt="네고왕" />
              </div>
              <div className="sale-text">
                <div>3000원 쿠폰</div>
                <div>(3만원 이상 구매시)</div>
                <div>2024.09.20까지 </div>
              </div>
            </div>
            <div>선착순 쿠폰이 조기 마감될 수 있으니 서둘러 주세요.</div>
          </div>
          <div onClick={() => handleButtonClick(2000)} className="items">
            <div className="items-main">
              <div className="coupon-image">
                <img src={couponImage} alt="네고왕" />
              </div>
              <div className="sale-text">
                <div>2000원 쿠폰</div>
                <div>(2만원 이상 구매시)</div>
                <div>2024.09.20까지 </div>
              </div>
            </div>
            <div>선착순 쿠폰이 조기 마감될 수 있으니 서둘러 주세요.</div>
          </div>
          <div onClick={() => handleButtonClick(1000)} className="items">
            <div className="items-main">
              <div className="coupon-image">
                <img src={couponImage} alt="네고왕" />
              </div>
              <div className="sale-text">
                <div>1000원 쿠폰</div>
                <div>(1만원 이상 구매시)</div>
                <div>2024.09.20까지 </div>
              </div>
            </div>
            <div>선착순 쿠폰이 조기 마감될 수 있으니 서둘러 주세요.</div>
          </div>
        </div>
      </div>
      <div className="youtube">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/93mnQmY5FiM?si=SViEW0AB2aYnoOhx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      {saleimges.map((image, index) => (
        <div key={index} className="imagewrapper">
          <img src={image[0]} alt={`Sale product ${index + 1}`} />
          <div className="blue"></div>
        </div>
      ))}
    </div>
  );
};

export default EventPage;
