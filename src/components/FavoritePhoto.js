import React from "react";
import { useSelector } from "react-redux";


const FavoritePhoto = () => {
  const photoUrls = useSelector((state) => state.favorite);

  

  if (!photoUrls) return <div />;
  return (
      <div id="photo-show">{
      photoUrls.map((photoData,index) =>
    photoData.media_type === "image" ? (
      <img
        key={index}
        src={photoData.url}
        alt={photoData.title}
        className="photo"
        
      />
      
    ) : (
      <iframe
        key={index}
        title="space-video"
        src={photoData.url}
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        className="photo"
        
      />
    )
  )
    }</div>)
};

export default FavoritePhoto;
