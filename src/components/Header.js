import React from "react";
import { useEffect, useState } from "react";

import "./css/header.css";
import banner from "../images/banner.png";
import { useDispatch } from "react-redux";
import { setBeauticianList } from "../features/beauticianSlice";
import { getBeauticianList } from "../services/BeauticianServices";

function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const response = await getBeauticianList();
      dispatch(setBeauticianList(response.beauticians));
    }
    getData();
  }, []);
  return (
    <div className="header">
      <div className="headertitles">
        <span className="headertitlSM">Best Beauty Saloon in the City</span>
      </div>
      <img className="headerimg" src={banner} alt="Bannner Image" />
    </div>
  );
}

export default Header;
