"use client";

import { useState } from 'react';
import styles from './destination.module.css';

export const AddWishlistItem = ({
  onAddWishlistItem,
}) => {
  const [thumbnail, onThumbnailChange] = useState('/destination/image-europa.png');
  const [wishListItemName, setWishlistListItemName] = useState("");
  
  // TASK - React 1 week 3
 
  const onAddItemPressed = () => {
    // TASK - React 1 week 3
   
    if (wishListItemName.trim() === "") {
      alert("Please enter a valid wishlist item name!");
    } else {
      onAddWishlistItem({ name: wishListItemName, thumbnail });
      setWishlistListItemName("");
      onThumbnailChange("/destination/image-europa.png");
    }
  }


  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={wishListItemName}
        onChange={(e) => setWishlistListItemName(e.target.value)}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        onChange={(e) => onThumbnailChange(e.target.value)}
        value={thumbnail}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
