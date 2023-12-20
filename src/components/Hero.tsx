import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Button } from "./Button";
// import { Carousel } from "react-bootstrap";

export function Hero() {
  const data = [
    {
      title: "physical properties",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis pulvinar augue, vitae sollicitudin dolor. Aenean condimentum bibendum lectus, blandit vulputate libero interdum non.",
      images: {
        imgOne:
          "https://images.unsplash.com/photo-1555181937-efe4e074a301?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgTwo:
          "https://images.unsplash.com/photo-1532570204726-145c7199f10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgThree:
          "https://images.unsplash.com/photo-1609881583302-61548332039c?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgFour:
          "https://images.unsplash.com/photo-1599833114852-724119b27cd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      title: "chemical properties",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis pulvinar augue, vitae sollicitudin dolor. Aenean condimentum bibendum lectus, blandit vulputate libero interdum non.",
    },
  ];

  const len = data.length - 1;

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () =>
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);

  const nextSlide = () =>
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);

  return (
    <div className="carousel-container">
      <div className="carousel-prev-next-btn">
        <GoChevronLeft className="prev" onClick={prevSlide} />
        <GoChevronRight className="next" onClick={nextSlide} />
      </div>

      <div className="carousel-content-container">
        {data.map((item, index) => (
          <div
            className={`carousel-item ${
              index === activeIndex ? "active" : "inactive"
            }`}
            key={index}
          >
            <div className="carousel-txt-content">
              <h1 className="carousel-title">{item.title}</h1>
              <p className="carousel-content">{item.content}</p>
            </div>

            <div className="carousel-img-container">
              <div className="first">
                <img className="imgOne" src={item.images?.imgOne} />
              </div>
              <div className="second">
                <div className="up">
                  <img className="imgTwo" src={item.images?.imgTwo} />
                </div>
                <div className="down">
                  <img className="imgThree" src={item.images?.imgThree} />
                  <img className="imgFour" src={item.images?.imgFour} />
                </div>
              </div>
            </div>

            <div className="carousel-indicator-container">
              {data.map((_, index) => (
                <span
                  className={`${
                    activeIndex === index
                      ? "carousel-indicator active-carousel-item"
                      : "carousel-indicator"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        ))}
        <Button secondary secondaryColor btnCenter>
          more
        </Button>
      </div>
    </div>
  );
}
