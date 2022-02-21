import React, { useState, useCallback, useEffect, useMemo } from "react";
import axios from "axios";

import "./Gallery.css";
import Search from "../Search";

//const
const clientId =
  "?client_id=2680e3723c6c767b19a7369175e71cef135d6c7c220e416dd470481f9db84f81";
const searchUrl = `https://api.unsplash.com/search/photos/`;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const imageBySearch = async (query) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${searchUrl}${clientId}&query=${query}`
      );

      setImages(data.results);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const renderImages = useMemo(() => {
    return images.map((image) => {
      console.log(
        "🚀 ~ file: Gallery.jsx ~ line 19 ~ renderImages ~ image",
        image
      );
      return (
        <div className="img-cell" key={image.id}>
          <img className="img" src={image.urls.small} alt={image.id} />
          <p className="bio">{image.user.bio}</p>
        </div>
      );
    });
  }, [images]);

  useEffect(() => {
    const fetchImage = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const { data } = await axios.get(
          "https://api.unsplash.com/photos/?client_id=2680e3723c6c767b19a7369175e71cef135d6c7c220e416dd470481f9db84f81"
        );
        setImages(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchImage();
  }, []);

  return (
    <div>
      <h1 className="txt">Gallery {isLoading && "loading..."} </h1>
      {isError && <div>Something went wrong...</div>}
      <Search imageBySearch={imageBySearch} />
      <div className="image-container">{renderImages}</div>
    </div>
  );
};

export default Gallery;
