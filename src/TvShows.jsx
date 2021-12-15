import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

const TvShows = ({ title, fetchUrl, Netflix_originals, catagory }) => {
  const [getmuvies, setGetmuvies] = useState([]);
  const [urlTrailer, setUrlTrailer] = useState([]);

  useEffect(() => {
    const fetchurl = async () => {
      const getData = await axios.get(fetchUrl);
      setGetmuvies(getData.data.results);
      setUrlTrailer(false)

    };
    fetchurl();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '99%',
    marginLeft: '15px',
    playerVars: {
      autoplay: 1,
    },
  };

  const imgclick = (x) => {
    if (urlTrailer) {
      setUrlTrailer('');
    } else {
      movieTrailer(x?.title || x?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setUrlTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="container-fluid">
        <h2 className="Row_title">{title}</h2>
        <div className="Row_poster">
          {getmuvies.map((x, index) => {
            return (
              <>
                <img
                  src={`${baseImgUrl}${x.poster_path || x.backdrop_path} `}
                  key={x?.id || index}
                  alt={x.name || x.title}
                  className={`Row_img  ${
                    Netflix_originals && "Netflix_originals"
                  } `}
                  onClick={() => imgclick(x)}
                />
              </>
            );
          })}
        </div>
        {urlTrailer && <YouTube videoId={urlTrailer} opts={opts} />}
      </div>
    </>
  );
};

export default TvShows;
