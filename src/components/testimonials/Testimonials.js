import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Agatha Richards",
      position: "Product Designer at inVision",
      content:
        "“ What an awesome 3 day event #descon2020 was, I felt like I really learned a lot from how to improve my personal brand, to being a more confident designer to how to better connect with my clients.“",
      imageSrc:
        "https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b45d842b6ff3d_Testimonial1.png",
    },
    {
      id: 2,
      name: "Jeremy Ruffalo",
      position: "Freelance Graphic Designer",
      content:
        "“ As a freelancer, the industry is always changing. Descon teaches you how to cope with those changes and it has really helped me. Would definitely recommend. “",
      imageSrc:
        "https://uploads-ssl.webflow.com/60b8d88c4f8b453cf9b6fefa/60b8d88c4f8b45b61cb6ff3e_Testimonial2.png",
    },
    // Add more testimonial data as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="heading">
          <h1>Testimonials</h1>
          <p>A few words from the community</p>
        </div>
        <div className="testimonial-container">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`slide ${index === activeIndex ? "active" : ""}`}
            >
              <img
                src={testimonial.imageSrc}
                alt={`testimonial-${testimonial.id}`}
                className="testimonial-img"
              />
              <div className="testimonial-caption">
                <p className="content">{testimonial.content}</p>
                <span className="name">{testimonial.name}</span>
                <span className="position">{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
