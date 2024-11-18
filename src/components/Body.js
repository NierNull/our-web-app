import React from "react";

const Body = () => {
  return (
      <main style={styles.body}>

          <div style={styles.card}>
              <img src="/olena.jpg" style={styles.photo} alt="Olena Sitnikova" />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Olena Sitnikova</h2>
                  <p style={styles.position}>Full-stack Developer of Team 4</p>
              </div>
          </div>

          <div style={styles.card}>
              <img src="/Maria.jpg" style={styles.photo} alt="Maria Semionyk" />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Maria Semionyk</h2>
                  <p style={styles.position}>Project-manager</p>
              </div>
          </div>

    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
