import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Imagem from '../Images/pizza1.jpg'
import Imagem2 from '../Images/pizza2.jpg'
import Imagem3 from '../Images/pizza3.jpg'
import Imagem4 from '../Images/pizza8.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';


const Carrousel = () => {
    return (
        <Carousel fade>

            <Carousel.Item className='d-flex justify-content-center'>
                <img
                    className="d-flex w-75 "
                    src={Imagem}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center '>
                <img
                    className="d-flex w-75 "
                    src={Imagem2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='d-flex justify-content-center '>
                <img
                    className="d-flex w-75 "
                    src={Imagem3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );

};

export default Carrousel
