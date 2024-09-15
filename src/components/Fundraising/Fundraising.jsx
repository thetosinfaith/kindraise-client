import React, { useEffect } from 'react';
import Roots from "../../assets/roots.png";
import './Fundraising.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Fundraising = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='fundraising-pages'>
      <div className='fundraising-pages-header'>
        <div className='fundraising-intro' data-aos="fade-up">
          <h1>KindRaise Gives You More</h1>
          <p>
            Supercharge your fundraising efforts with our unique tools and personal <br />support.
            Helping you raise more money effortlessly
          </p>
        </div>
      </div>

      <section className="fundraising-description-section">
        <div className="fundraising-description-container">
          <div className="fundraising-image" data-aos="fade-right">
            <div className="fundraising-image-wrapper">
              <img src={Roots} alt="Fundraising" className="fundraising-main-image" />
            </div>
          </div>

          <div className="fundraising-text" data-aos="fade-left">
            <h1>Fundraising <span>Pages</span></h1>
            <p>
              Raise more for your mission with <br /> interactive fundraising pages
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fundraising;
