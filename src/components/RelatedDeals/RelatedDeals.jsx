import React from "react";
import "./RealtedDeals.scss";
function RelatedDeals() {
  return (
    <div className="related">
      <div className="related__title">Related deals you might like for</div>
      <div className="related__container">
        <div className="related__card">
          <img
            src="./images/image.png"
            alt="product"
            className="related__img"
          />
          <div className="related__offer">
            <span className="related__offer--text">20% Off</span>
            <span className="related__offer--text">Limited time</span>
          </div>
          <div className="related__heading">Webbuilder 1</div>
          <div className="related__decription">
            Computer Modern clasic with wix support
          </div>
          <div className="related__price">
            <span className="current__price">$39.96</span>
            <span className="discount__price">$49.96</span>
            <span className="discount__percentage">(20% Off)</span>
          </div>
          <div className="related__btn">View Deal</div>
        </div>
        <div className="related__card">
          <img
            src="./images/image.png"
            alt="product"
            className="related__img"
          />
          <div className="related__offer">
            <span className="related__offer--text">20% Off</span>
            <span className="related__offer--text">Limited time</span>
          </div>
          <div className="related__heading">Webbuilder 1</div>
          <div className="related__decription">
            Computer Modern clasic with wix support
          </div>
          <div className="related__price">
            <span className="current__price">$39.96</span>
            <span className="discount__price">$49.96</span>
            <span className="discount__percentage">(20% Off)</span>
          </div>
          <div className="related__btn">View Deal</div>
        </div>
        <div className="related__card">
          <img
            src="./images/image.png"
            alt="product"
            className="related__img"
          />
          <div className="related__offer">
            <span className="related__offer--text">20% Off</span>
            <span className="related__offer--text">Limited time</span>
          </div>
          <div className="related__heading">Webbuilder 1</div>
          <div className="related__decription">
            Computer Modern clasic with wix support
          </div>
          <div className="related__price">
            <span className="current__price">$39.96</span>
            <span className="discount__price">$49.96</span>
            <span className="discount__percentage">(20% Off)</span>
          </div>
          <div className="related__btn">View Deal</div>
        </div>
      </div>
    </div>
  );
}

export default RelatedDeals;
