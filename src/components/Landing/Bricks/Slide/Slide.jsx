import './Slide.css';
import React, { useState } from 'react';


const Slide = () =>{
  const [slideIndex, setSlideIndex] = useState(0);

  const slideItems = [
    {
      id: 0,
      name: 'Jorge Perez',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend, velit eget lacinia viverra, odio libero vestibulum odio, quis porttitor velit neque sed ipsum. Aliquam erat volutpat. Duis ac turpis ut sapien vestibulum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
    },
    {
      id: 1,
      name: 'Marcela Jimenez',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend, velit eget lacinia viverra, odio libero vestibulum odio, quis porttitor velit neque sed ipsum. Aliquam erat volutpat. Duis ac turpis ut sapien vestibulum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
    },
    {
      id: 2,
      name: 'Pablo Lucas',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend, velit eget lacinia viverra, odio libero vestibulum odio, quis porttitor velit neque sed ipsum. Aliquam erat volutpat. Duis ac turpis ut sapien vestibulum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
    }
  ];

    const goToSlide = (index) => {
        setSlideIndex(index);
     };

    return (
        <div className="Slide__conteiner">
            <div className="Slide__conteiner-content">
                <h3 className="content-text">{slideItems[slideIndex].content}</h3>
                <h5 className="content-name">{slideItems[slideIndex].name}</h5>
            </div>

            <div className="Button-conteiner">
                {slideItems.map(item => (
                <button className="Button-conteiner__button" key={item.id} onClick={() => goToSlide(item.id)}>
                    {item.id + 1}
                </button>
                ))}
            </div>
        </div>
  );
};


export default Slide