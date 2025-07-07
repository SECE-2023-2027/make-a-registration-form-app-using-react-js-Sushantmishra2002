import React from "react";
import "../Styles/SharePage.css";
import shareImage from "../assets/OIP.jpeg";

const SharePage = () => {
  return (
    <div className="share-wrapper" id="share">
      <section className="share-header">
        <h1>share</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus ut iure itaque quibusdam rem accusantium deserunt
          reprehenderit sunt minus.
        </p>
        <button>findout</button>
      </section>

      <section className="share-content">
        <div className="image-block">
          <img src={shareImage} alt="share" />
        </div>
        <div className="text-block">
          <h2>share what yoou reatee</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            reiciendis, voluptate at alias laborum odit aliquid tempore
            perspiciatis repudiandae hic?
          </p>
        </div>
      </section>
    </div>
  );
};

export default SharePage;
