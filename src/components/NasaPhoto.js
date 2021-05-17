import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { addPhotoAction } from "../redux";
import { useSelector,useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const date = useSelector((state) => state.date);
  const [photoData, setPhotoData] = useState(null);

  const dispatch=useDispatch();
  const addPhoto = (url) => dispatch(addPhotoAction(url));

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      let dateString = date.toLocaleString().split(",")[0].split("/");
      dateString = dateString[2] + "-" + dateString[0] + "-" + dateString[1];
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateString}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, [date]);

  const handleAddList =()=>{
    addPhoto(photoData)

  }





  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
          <button onClick={handleAddList}>Add to Favorite</button>
        </div>
      </div>
    </>
  );
}
