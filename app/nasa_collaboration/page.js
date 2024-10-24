"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = 'TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM';

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };
    const fetchDailyImg = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    };

    fetchRoverPhotos();

    fetchDailyImg(); // Fetch data for Astronomy Picture of the Day
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        {/* TASK - React 1 week 3 */}
       <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {dailyImg?.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              <img
                src={dailyImg.url}
                alt={dailyImg.title}
                className={styles.nasaPicOfTheDayImg}
              />
            </>
          ) : (
            <p>Loading Astronomy Picture of the Day...</p>
          )}
        </section>
         {/* TASK - React 1 week 3 */}
           {/* Mars Rover Photos Section */}
           <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            roverPhoto.photos.map((photo, index) => (
              <div key={index}>
                <p>Date: {photo.earth_date}</p>
                <p>Rover Name: {photo.rover.name}</p>
                <img className={styles.nasaPicOfTheDayImg} src={photo.img_src} alt={`Mars Rover photo taken on ${photo.earth_date}`} />
              </div>
            ))
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
