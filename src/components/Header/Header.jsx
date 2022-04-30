import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";
import { linksObj, pathObj } from "../../constants/constants";
import { Menu } from "@material-ui/icons";
import $ from "jquery";

function Header({ props }) {
  const [currentTab, setCurrentTab] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const history = useHistory();

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
    const handleLoad = (path) => {
      if (path in pathObj) {
        let idx = pathObj[path];
        handleTree(idx);
        $(".header-nav a").each(function (index) {
          if (idx === index) {
            $(this).addClass("header-active-tab");
          } else {
            $(this).removeClass("header-active-tab");
          }
        });
      }
    };
    if (history?.location?.pathname) {
      let path = history.location.pathname;
      handleLoad(path);
    }
    return history.listen((location) => {
      let path = location.pathname;
      handleLoad(path);
    });
  }, [history, handleTree]);

  return (
    <div className="header-main">
      <div className="header-tabs-div">
        <div className="header-nav">
          {linksObj.map(({ title, ext, img }, index) => (
            <Link
              to={`/${title.toLowerCase()}`}
              key={index}
              onClick={() => handleLink(index, false, title)}
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
