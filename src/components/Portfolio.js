import React from 'react'
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
// FOntawesome imports
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// React popup box
import{popupboxManager, popboxContainer} from "react-popupbox";
const Portfolio = () => {
    // img1
    const openpopupboximg1=() =>{
        <>
        
        </>
    }
    return (
        <div className="portfolio-wrapper">
            <div className="container">
              <h1 className="text-uppercase text-center py-5">portfolio</h1>
              <div className="row">
                  <div className="portfolio-image-box col">
              <img className="portfolio-image" src={img1} alt="" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                   </div>
              
              {/* */}
              
                  <div className="portfolio-image-box col">
              <img className="portfolio-image" src={img2} alt="" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                  </div> 
              
              {/**/}
              
                  <div className="portfolio-image-box col">
              <img className="portfolio-image" src={img1} alt="" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                  </div>
              
              {/* */}
             
                   <div className="portfolio-image-box col">
              <img className="portfolio-image" src={img2} alt="" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                   </div>
             </div>
              {/* */}
            </div>
        </div>
    )
}

export default Portfolio;
