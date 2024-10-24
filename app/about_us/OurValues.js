import styles from "./values.module.css";

const OurValues = () => {
  const value = [
    {
      id: "01",
      title: "Exploration",
      description:
        "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
    },
    {
      id: "02",
      title: "Innovation",
      description:
        "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
    },
    {
      id: "03",
      title: "Sustainability",
      description:
        "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
    },
    {
      id: "04",
      title: "Community",
      description:
        "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
    },
  ];

  return (
    <>
      <div className={styles.ourValues}>
        {value.map((value, index) => (
          <div key={index}>
            <div>
              {" "}
              <h1>{value.id}</h1>{" "}
            </div>
            <div>
              {" "}
              <h2>{value.title}</h2>{" "}
            </div>
            <div>
              {" "}
              <p>{value.description}</p>{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurValues;
