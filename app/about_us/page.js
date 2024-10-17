import styles from './page.module.css';
import OurValues from "./ourValues";
import OurCrew from "./OurCrew";
import OurPartners from "./OurPartners";



// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

// const OurValues = () => {

  // TASK - React 1 week 1
  //--------------------------------------------------------
//   return (
//     <section>
// <p> OUR VALUES </p>
//     </section>
//   );
// };
//------------------------------------------------------------------
// const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  //------------------------------------------------------------------
//   return (
//     <p> ADD OUR CREW HERE </p>
//   );
// }
//------------------------------------------------------------------
// const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  
//   return (
//     <p> ADD OUR Partners HERE </p>
//   );
// }


export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1 className={styles.heading}>About us</h1>

        <section className="card">

          <h2 className={styles.titleFont}>Our Values</h2>
          <OurValues/>
        </section>

        <section className="card">
          <h2 className={styles.titleFont}>The crew</h2>
          <OurCrew/>
        </section>

         {/* TASK - React 1 week 1 */}

         <section className="card">
          <h1 className={styles.titleFont}>Our Partners</h1>
          <OurPartners />
        </section>

      </main>
    </div>
  );
}

export default Crew;
