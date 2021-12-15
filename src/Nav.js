import React, { useState } from "react";
import "./Nav.css";

const Nav = (catagory) => {
  const [click, setClick] = useState(catagory);
  const [abc, setAbc] = useState([]);




  return (
    <>
      <div className="Navbar_main">
        <nav className="Navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
            alt="NETFLIX-LOGO"
            className="logo"
          />
          <div className="navbar_element">
            <ul className="navbar_ul">
              <button className="list">Home</button>
              <button className="list"  >
                Tv Shows
              </button>
              <button className="list">Muvies</button>
              <button className="list">Recently</button>
              <button className="list">My list</button>
            </ul>
            <div className="search_component">
              <input
                type="text"
                className="input_search"
                onChange={(e) => setClick(e.target.value)}
                             />
              <button className="search_button" onClick={() => setAbc(click)}>
                Click
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
