import React from "react";
import "../styles/home.scss";

import Hosting from "../components/Hosting/Hosting";
import RelatedDeals from "../components/RelatedDeals/RelatedDeals";
import SignUpCard from "../components/SignUpCard/SignUpCard";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">
          <p className="home__title">Best Website builders in the US</p>
          <div className="home__info">
            <div className="home__info--container">
              <div className="home__lastupdate">
                <img
                  src="./images/tick_icon.png"
                  alt="tick icon"
                  className="tick_icon"
                />
                Last Updated - February 22, 2020
              </div>
              <div className="home__disclosure">
                <img
                  src="./images/info_icon.png"
                  alt="info icon"
                  className="info_icon"
                />
                Advertising Disclosure
              </div>
            </div>
            <select className="home__filter">
              <option value="top-relevent" className="home__options">
                Top Relevent
              </option>
              <option value="latest" className="home__options">
                Latest
              </option>
              <option value="old" className="home__options">
                Old
              </option>
            </select>
          </div>
        </div>
        <ul className="home__menu">
          <li className="home__item">Tools</li>
          <li className="home__item">AWS Builder</li>
          <li className="home__item">Start Build</li>
          <li className="home__item">Build Supplies</li>
          <li className="home__item">Tooling</li>
          <li className="home__item">BlueHosting</li>
        </ul>
        <div className="home__breadcrumb">
          <div className="home__breadcrumb--item">Home </div>
          <span className="home__breadcrumb--icon">&gt;</span>
          <div className="home__breadcrumb--item">Hosting for all</div>
          <span className="home__breadcrumb--icon">&gt;</span>
          <div className="home__breadcrumb--item">Hosting6</div>
          <span className="home__breadcrumb--icon">&gt;</span>
          <div className="home__breadcrumb--item">Hosting5</div>
        </div>
        <Hosting />
        <RelatedDeals />
        <SignUpCard />
      </div>
    </div>
  );
}

export default Home;
