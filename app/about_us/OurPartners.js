import styles from "./partners.module.css";

const OurPartners = () => {

const companyName = [

{company: "Alphabet",
 Url: "./business_partners/alphabet-logo.png",
},
{company: "Amazon",
  Url: "./business_partners/amazon_logo.png",
},
{company: "CBC",
  Url: "./business_partners/CBC_Logo_White.png",
},
{company: "Microsoft",
  Url: "./business_partners/Microsoft-Logo-white.png",
},
{company: "NYU",
  Url: "./business_partners/nyu-logo.png",
},
{company: "Queens",
  Url: "./business_partners/QueensLogo_white.png",
},
{company: "Samsung",
  Url: "./business_partners/samsung-logo.png",
},
{company: "Sodexo",
  Url: "./business_partners/sodexo-logo.png",
},

];

  return (
    <>
    <h3>We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.
    </h3>
    <div className={styles.ourPartners}>
    {companyName.map((partner) => (
    <div key={partner.company} >
    <img src={partner.Url} alt={`${partner.company}`} />
    </div>

    ))}
    </div>
    
    </>
  );
};

export default OurPartners;
