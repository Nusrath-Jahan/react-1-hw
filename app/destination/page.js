"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "@/components/destination/PlanetWishlistItem";

const PlanetCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  onAddOrRemovePlanet,
}) => {
  return (
    <>
      <div className={styles.planetCard}>
        <img
          className={styles.planetThumbnail}
          src={thumbnail}
          alt={`${name} thumbnail`}
        />
        <div className={styles.planetDescription}>
          <h2>
            {" "}
            {name.toUpperCase()} {isSelected ? "- SELECTED" : ""}{" "}
          </h2>
          <p>{description}</p>
        </div>
        <button
          className="roundButton"
          onClick={() => onAddOrRemovePlanet(name)}
        >
          {isSelected ? "REMOVE" : "ADD PLANET"}
        </button>
      </div>
    </>
  );
};

// TASK - React 1 week 2

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  const numberOfPlanets = onAddPlanet.length;

  const planets = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
    },
  ];

  const onAddOrRemovePlanet = (index) => {
    // TASK - React 1 week 2
    onAddPlanet((prevSelectedPlanets) => {
      if (prevSelectedPlanets.some((p) => p.name === index.name)) {
        return prevSelectedPlanets.filter((p) => p.name !== index.name);
      }
      return [...prevSelectedPlanets, index];
    });
    console.log(
      `You selected the following planet: ${index.name}, with the index of ${index.name}`
    );
  };

  const onAddWishlistItem = (index) => {
    onAddPlanet((prevSelectedPlanets) => {
      if (prevSelectedPlanets.some((p) => p.name === index.name)) {
        alert(`${index.name} is already in your wishlist.`);
        return prevSelectedPlanets;
      }
      return [...prevSelectedPlanets, index];
    });
  };

  return (
    <>
      <div className="fullBGpicture">
        <main className="mainContent">
          <h1>Travel destinations</h1>
          <section className="card">
            <h2>Wishlist</h2>

            <h3>Your current wishlist</h3>

            <div className={styles.wishlistList}>
              <ul className={styles.wishlistListItems}>
                {selectedPlanets.map((planet, index) => (
                  <PlanetWishlistItem
                    key={index}
                    name={planet.name}
                    thumbnail={planet.thumbnail}
                    onRemove={() => onAddOrRemovePlanet(planet)}
                  />
                ))}
              </ul>
            </div>

            {/* --------- */}

            {numberOfPlanets === 0 ? (
              <p>No planets in wishlist :(</p>
            ) : (
              <p>You have {numberOfPlanets} in your wishlist!</p>
            )}

            {/* TASK - React 1 week 3 */}

            <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />

            {/* TASK - React 1 week 3 */}
          </section>
          <section className="card">
            <h2>Possible destinations</h2>

            {/* TASK - React 1 week 2 */}

            {planets.map((planet, index) => (
              <PlanetCard
                key={index}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={selectedPlanets.includes(planet.name)}
                onAddOrRemovePlanet={() =>
                  onAddOrRemovePlanet(planet.name, index)
                }
              />
            ))}
          </section>
        </main>
      </div>
    </>
  );
};

export default Destinations;
