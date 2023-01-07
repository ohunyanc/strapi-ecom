import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            dicta, laboriosam ab, maiores dignissimos aliquid sunt mollitia quos
            necessitatibus odit autem voluptatum aperiam.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nihil pariatur minus ducimus in ipsam, saepe vel maxime earum
            delectus dolore, non aliquam!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <span className="copyright">&#169; 2023, Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
