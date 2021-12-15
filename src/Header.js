import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Header1 = (fetchUrl) => {
  const [header, setHeader] = useState([]);
  const [urlTrailer, setUrlTrailer] = useState("");

  useEffect(() => {
    const fetchurl = async () => {
      const getData = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=35c02ab5f759077608357958de726642&with_network=123"
      );
      setHeader(
        getData.data.results[
          Math.floor(Math.random() * getData.data.results.length - 1)
        ]
      );
    };
    fetchurl();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "99%",
    marginLeft: "15px",
    playerVars: {
      autoplay: 1,
    },
  };

  const imgClick = (header) => {
     if (urlTrailer) {
      setUrlTrailer("");
    } else {
      movieTrailer(header?.title || header?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setUrlTrailer(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="main">
        <div
          className="main_section"
          key={header.id}
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(
        " https://image.tmdb.org/t/p/original/${header?.backdrop_path} "
        )`,
            backgroundPosition: "center center",
          }}
        >
          <div className="title_section">
            <h1 className="h_title">{header.title || header.name}</h1>
            <p className="discribtion">{header.overview}</p>
            <button className="playbtn">Play</button>
            <button className="playbtn" onClick={() => imgClick(header)}>
              WatchTrailer
            </button>
            <button className="listbtn">+ List</button>
          </div>
        </div>
        {urlTrailer && <YouTube videoId={urlTrailer} opts={opts} />}
      </div>
    </>
  );
};
export default Header1;
