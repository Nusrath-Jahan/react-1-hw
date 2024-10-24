"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import SocialMediaItem from "./SocialMediaItem";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            {" "}
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/about_us">About Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/destination">Destination</Link>{" "}
          </li>
        </ul>
      </div>

      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      {/* TASK - React 1 week 1 */}
      {/* Add a new list item for LINKEDIN */}

      {/* TASK - React 1 week 2 */}
      {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
      {/* it should accept the following props */}
      {/* url, title, icon */}
      {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url={"https://facebook.com"}
            title={"Facebook"}
            icon={"socialmedia/icons8-facebook-48.png"}
          />
          <SocialMediaItem
            url={"https://linkedin.com"}
            title={"LinkedIn"}
            icon={"socialmedia/linkedin_icon.png"}
          />
          <SocialMediaItem
            url={"https://instagram.com"}
            title={"Instagram"}
            icon={"socialmedia/icons8-instagram-48.png"}
          />
          <SocialMediaItem
            url={"https://tiktok.com"}
            title={"Tiktok"}
            icon={"socialmedia/tiktok_icon.png"}
          />
        </ul>
      </div>
    </footer>
  );
};
