import React from 'react';
import Slider from 'infinite-react-carousel';
import ImagemSlide1 from '../img/slide1.png';
import ImagemSlide2 from '../img/slide2.png';
import ImagemSlide3 from '../img/slide3.png'


export class Carrousel extends React.Component {
  render() {
    const settings =  {
      autoplay: true,
      dots: true,
      duration: 100,
    };
    return (
      <div>

        <Slider { ...settings }>
          <div>
          <img src= {ImagemSlide1}/> 
          </div>
          <div>
            <img src={ImagemSlide2} />
          </div>
          <div>
            <img src={ImagemSlide3} />
          </div>
        </Slider>
      </div>
    );
  }
}