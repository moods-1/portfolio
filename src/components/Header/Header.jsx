import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { linksObj } from "../../constants/constants";
import { Menu } from "@material-ui/icons";
import $ from "jquery";

function Header({ props }) {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleTree = useCallback((index) => {
    const { title, ext, img } = linksObj[index];
    setCurrentTab(
      <span>
        <img src={img} alt="title" /> {`${title}${ext}`}
      </span>
    );
  }, []);

  const handleLink = (index, mobile) => {
    (index || index === 0) && handleTree(index);
    mobile && setShowMobileMenu(false);
  };

  $(".header-nav a").on("click", function () {
    $(this).addClass("header-active-tab");
    $(this).siblings().removeClass("header-active-tab");
  });

  useEffect(() => {
    handleTree(0);
  }, [handleTree]);

  return (
    <div className="header-main">
      <div className="header-tabs-div">
        <div className="header-nav">
          {linksObj.map(({ title, ext, img }, index) => (
            <Link
              to={`/${title.toLowerCase()}`}
              key={index}
              onClick={() => handleLink(index, false, title)}
              className={index === 0 ? "header-active-tab" : ""}
            >
              <img src={img} alt="title" /> {`${title}${ext}`}
            </Link>
          ))}
        </div>
      </div>
      <div className="header-burger">
        <Menu onClick={() => setShowMobileMenu(!showMobileMenu)} />
        {showMobileMenu && (
          <div className="header-nav-mobile slide">
            {linksObj.map(({ title }, index) => (
              <Link
                to={`/${title.toLowerCase()}`}
                key={index}
                onClick={(e) => handleLink(index, true)}
              >
                {title}
              </Link>
            ))}
            <h3 onClick={() => setShowMobileMenu(!showMobileMenu)}>X</h3>
          </div>
        )}
      </div>
      <div className="header-tree">
        <p>src &#62; components &#62; {currentTab}</p>
      </div>
    </div>
  );
}

export default Header;
