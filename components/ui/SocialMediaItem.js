import Link from "next/link";
import styles from "./Footer.module.css";

export default function SocialMediaItem({ icon, title, url }) {
  return <>
     <div className={styles.socialContainer}>
      <div className={styles.socialContainer_icon}>
        <img src={icon} alt="Social-Media-logo" />
      </div>
      <Link href={url}>{title}</Link>
    </div>
    </>
}