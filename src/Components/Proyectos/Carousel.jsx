import { useState } from "react";
import widi1 from '../../../public/widi1.png';
import widi2 from '../../../public/widi2.png';
import widi3 from '../../../public/widi3.png';
import widi4 from '../../../public/widi4.png';
import widi5 from '../../../public/widi5.png';
import widi6 from '../../../public/widi6.png';
import widi7 from '../../../public/widi7.png';
import widi8 from '../../../public/widi8.png';


import styled from 'styled-components';

const CarouselImg = styled.img`
    height: 400px;
    width: 308px;
    border-radius: 5px;
    border: 1px solid var(--colorPrimario);
    padding: 5px;
    opacity: 0;

    transition: 0.5s;
    &.loaded{
        opacity: 1;
    }
`

const CarouselButton = styled.button`
    background-color: var(--colorPrimario);
    color: var(--colorSecundario);
    height: 30px;
    border-radius: 5px;
    padding: 3px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 5px;
    border: 1px solid var(--colorSecundario);
`
const CarouselContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
` 

export default function Carousel({images}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    const selectNewImage = (selectedIndex, images, next = true) => {
        setLoaded(false)

        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1)
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex)
        }, 500)


    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images)
    }

    return (
        <CarouselContainer>
            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
            <CarouselImg src={selectedImage} alt="." className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
            <CarouselButton onClick={next}>{">"}</CarouselButton>
        </CarouselContainer>
    )
}