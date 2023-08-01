import React from 'react';
import image from '../images/inkingi.jpg';

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="section-title">About Inkingi Choir</h2>
            <p className="section-description">
              Welcome to Inkingi Choir, a vibrant and talented group of singers dedicated to creating harmonious music and spreading joy through our performances. With a rich history and a passion for music, we strive to touch the hearts of our audiences and inspire them with our melodies.
            </p>
            <p>
              Inkingi Choir was founded with the vision of celebrating the power of music and using it as a tool for unity and cultural exchange. Our repertoire consists of a diverse range of musical genres, including traditional African melodies, contemporary compositions, and gospel songs. Through our performances, we aim to showcase the beauty of Rwandan music and share it with the world.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={image} alt="Inkingi" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
