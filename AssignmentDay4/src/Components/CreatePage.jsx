import React from "react";
import "../Styles/CreatePage.css";
import backgroundImg from "../assets/image3.jpeg";

const CreatePage = () => {
  return (
    <div className="create-wrapper" id="create">
      <section className="create-header">
        <h1>create</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus ut iure itaque quibusdam rem accusantium deserunt
          reprehenderit sunt minus.
        </p>
        <button>findout</button>
      </section>

      <section className="create-content">
        <div className="text-block">
          <h2>create your passion</h2>
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
        <div className="image-block">
          <img src={backgroundImg} alt="content" />
        </div>
      </section>
    </div>
  );
};

export default CreatePage;
