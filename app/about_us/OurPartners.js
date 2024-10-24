import styles from "./partners.module.css";

const OurPartners = () => {
  const companyName  = [
    { company: "Alphabet", url: "./business_partners/alphabet-logo.png" },
    { company: "Amazon", url: "./business_partners/amazon_logo.png" },
    { company: "CBC", url: "./business_partners/CBC_Logo_White.png" },
    {
      company: "Microsoft",
      url: "./business_partners/Microsoft-Logo-white.png",
    },
    { company: "NYU", url: "./business_partners/nyu-logo.png" },
    { company: "Queens", url: "./business_partners/QueensLogo_white.png" },
    { company: "Samsung", url: "./business_partners/samsung-logo.png" },
    { company: "Sodexo", url: "./business_partners/sodexo-logo.png" },
  ];

  return (
    <>
      <h3>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </h3>
      <div className={styles.ourPartners}>
        {companyName .map((partner) => (
          <div key={partner.company}>
            <img src={partner.url} alt={`${partner.company}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default OurPartners;
