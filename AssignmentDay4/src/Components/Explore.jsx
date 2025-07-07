import React from "react";
import Navbar from "./Navbar"; // Make sure the path is correct

const Explore = () => {
  return (
    <div>
      <Navbar />

      {/* Top Hero Section */}
      <div style={styles.heroSection} id="explore">
        <h1 style={styles.heading}>explore</h1>
        <p style={styles.subheading}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus ut iure itaque quibusdam rem accusantium deserunt
          reprehenderit sunt minus.
        </p>
        <button style={styles.button}>findout</button>
      </div>

      {/* Explore & Connect Section */}
      <div style={styles.contentSection}>
        <div style={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1350&q=80"
            alt="Phone"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.rightTitle}>Explore & Connect</h2>
          <p style={styles.rightText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
          <p style={styles.rightText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
          <p style={styles.rightText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroSection: {
    // backgroundImage: `url("https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1350&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    padding: "80px 20px",
    color: "white",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "16px",
    maxWidth: "700px",
    margin: "0 auto 30px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#37a69b",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  contentSection: {
    display: "flex",
    padding: "60px 10%",
    gap: "40px",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: "1",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "350px",
    borderRadius: "50%",
  },
  textContainer: {
    flex: "1",
  },
  rightTitle: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  rightText: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "10px",
  },
};

export default Explore;
