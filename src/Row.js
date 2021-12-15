import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, Netflix_originals }) => {
  const [getmuvies, setGetmuvies] = useState([]);
  const [urlTrailer, setUrlTrailer] = useState([]);

  useEffect(() => {
    const fetchurl = async () => {
      const getData = await axios.get(fetchUrl);
      setGetmuvies(getData.data.results);

      setUrlTrailer(false);
    };
    fetchurl();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "99%",
    marginLeft: "15px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const imgClick = (x) => {
    if (urlTrailer) {
      setUrlTrailer("");
    } else {
      movieTrailer(x?.title || x.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setUrlTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const onready = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <>
      <div className="container-fluid">
        <h2 className="Row_title">{title}</h2>
        <div className="Row_poster">
          {getmuvies.map((x) => {
            return (
              <>
                <img
                  src={`${baseImgUrl}${x.poster_path || x.backdrop_path} `}
                  key={x.id}
                  alt={x.name || x.title}
                  className={`Row_img ${
                    Netflix_originals && "Netflix_originals"
                  } `}
                  onClick={() => imgClick(x)}
                />
              </>
            );
          })}
        </div>

        {urlTrailer && (
          <YouTube videoId={urlTrailer} opts={opts} onReady={onready} />
        )}
      </div>
    </>
  );
};

export default Row;
