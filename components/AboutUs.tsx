"use client";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <style>{`
        /* --- RESET --- */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* --- MAIN WRAPPER (Forces Black Background) --- */
        .page-wrapper {
          background-color: #000000; /* Force Black */
          color: white;
          font-family: 'Geist', sans-serif;
          height: 100vh;
          width: 100vw;
          overflow: hidden; /* No scroll */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* --- TITLE --- */
        .main-title {
          font-size: clamp(3rem, 6vw, 5rem); /* Responsive size */
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 5vh;
          z-index: 10;
          
          /* OUTLINE EFFECT: Black text on Black background = Invisible, 
             so only the Gold Stroke shows */
          color: #000; 
          -webkit-text-stroke: 1.5px #D4AF37; 
        }

        /* --- LAYOUT CONTAINER --- */
        .content-row {
          display: flex;
          width: 80%;
          max-width: 1200px;
          align-items: center;
          justify-content: space-between;
          gap: 5%;
          z-index: 10;
        }

        /* --- LEFT COLUMN (Text) --- */
        .text-col {
          flex: 1.2;
        }

        .gold-divider {
          width: 100px;
          height: 3px;
          background-color: #D4AF37;
          margin-bottom: 30px;
        }

        .desc-text {
          font-size: clamp(0.9rem, 1.1vw, 1.1rem);
          line-height: 1.8;
          color: #cccccc;
          margin-bottom: 20px;
          text-align: justify;
        }

        /* Special styling for the second paragraph */
        .gold-highlight-text {
          font-size: clamp(1.1rem, 1.3vw, 1.3rem); /* Increased font size */
          line-height: 1.8;
          color: #D4AF37; /* Gold Color */
          margin-bottom: 20px;
          text-align: justify;
          font-weight: 500;
        }

        .highlight-span {
          color: #D4AF37;
          font-weight: bold;
        }

        /* --- RIGHT COLUMN (Cards) --- */
        .cards-col {
          flex: 0.8;
          display: flex;
          gap: 30px;
          justify-content: center;
        }

        .gold-card {
          position: relative;
          width: 180px;
          height: 180px;
          background: linear-gradient(135deg, #E6C25B 0%, #B8860B 100%);
          border-radius: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          
          /* WHITE SHADOW BEHIND CARD */
          box-shadow: 12px 12px 0px #ffffff;
        }

        .card-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 15px;
          object-fit: contain;
        }

        .card-label {
          color: #1a1a1a;
          font-weight: 800;
          font-size: 16px;
          line-height: 1.2;
        }

        /* --- MOBILE RESPONSIVENESS --- */
        @media (max-width: 900px) {
          .content-row {
            flex-direction: column;
            width: 90%;
            text-align: center;
          }
          .text-col {
            margin-bottom: 40px;
          }
          .gold-divider {
            margin: 0 auto 20px auto;
          }
          .desc-text, .gold-highlight-text {
            text-align: center;
          }
          .gold-card {
            width: 140px;
            height: 140px;
            box-shadow: 8px 8px 0px #ffffff;
          }
          .main-title {
            font-size: 3rem;
          }
        }
      `}</style>

      <div className="page-wrapper">
        <h1 className="main-title">ABOUT US</h1>

        <div className="content-row">
          {/* Left Text */}
          <div className="text-col">
            <div className="gold-divider"></div>
            <p className="desc-text">
              <span className="highlight-span">Solvify Club</span> is one of the recently initiated clubs of the CSE department, NMIT! 
              It is not only a club but also a community that brings people from different 
              mind-sets all together, with the motto to tackle real world challenges.
            </p>
            {/* Highlighting the latter sentence/paragraph in gold with larger font */}
            <p className="gold-highlight-text">
              Prioritising continuous learning, the club has also given an opportunity 
              to its members to explore, learn and experience in the field of both tech 
              and real world entities, fostering innovation and creative thinking.
            </p>
          </div>

          {/* Right Cards */}
          <div className="cards-col">
            <div className="gold-card">
              <img src="/Components for Website/About_us_comp1.svg" alt="Community" className="card-icon" />
              <span className="card-label">Community &<br/>Connection</span>
            </div>

            <div className="gold-card">
              <img src="/Components for Website/About_us_comp2.svg" alt="Innovation" className="card-icon" />
              <span className="card-label">Innovation &<br/>Creativity</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;