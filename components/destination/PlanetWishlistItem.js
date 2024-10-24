"use client";

import { useState } from 'react';

import styles from '@/components/destination/destination.module.css';


const PlanetWishlistItem = ({name, onRemove,thumbnail}) => {
    
    return <>
      <h1>Hello World</h1>
      <div className={styles.wishlistItem}>
        <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
        <b>{name.toUpperCase()}</b>
        <button onClick={onRemove}>remove</button>
      </div>
    </>
  }
  export default PlanetWishlistItem;