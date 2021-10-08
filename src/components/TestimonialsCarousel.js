import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import client1 from "../client1.jpg";
import client2 from "../client2.jpg";
import client3 from "../client3.jpg";
import client4 from "../client4.jpg";

const TestimonialsCarousel = () => {
    return (
        <Carousel>
            {/*
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            shoeStatus={false}
            autoplay={true}
            interval={3000}
            */}
         <>
         <img src={client1} alt="client" />
         <div className="mycarousel">
         <h3>John Doe 1</h3>
         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
         </div>
         </> 
         <>
         <img src={client2} alt="client" />
         <div className="mycarousel">
         <h3>John Doe 2</h3>
         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
         </div>
         </>
         <>
         <img src={client3} alt="client" />
         <div className="mycarousel">
         <h3>John Doe 3</h3>
         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
         </div>
         </>
         <>
         <img src={client4} alt="client" />
         <div className="mycarousel">
         <h3>John Doe 4</h3>
         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
         </div>
         </>  
        </Carousel>
    )
}
export default TestimonialsCarousel;
