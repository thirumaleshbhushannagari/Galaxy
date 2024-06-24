import React from "react";

const About = () => {
  return (
    <>
      <h2 className="heading">About Us</h2>
      <section className="about">
        <img src={require("../../../Assets/image1.png.jpg")} alt="" />
        <div className="content">
          <h2>Lorem ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta eum
            dolorem labore, maxime et mollitia consectetur harum, vero facere
            iure quos! Possimus eveniet officia dolorem deserunt in sit
            doloremque necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            laboriosam perspiciatis et eos expedita nulla consectetur aspernatur
            quae, beatae, consequatur accusamus tenetur eveniet ad magnam optio
            neque unde earum delectus?
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
