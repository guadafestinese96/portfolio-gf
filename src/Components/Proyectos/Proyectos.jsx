import Carousel from "./Carousel"
import widi1 from '../../../public/widi1.png';
import widi2 from '../../../public/widi2.png';
import widi3 from '../../../public/widi3.png';
import widi4 from '../../../public/widi4.png';
import widi5 from '../../../public/widi5.png';
import widi6 from '../../../public/widi6.png';
import widi7 from '../../../public/widi7.png';
import widi8 from '../../../public/widi8.png';
import chupitraki1 from '../../../public/chupitraki1.png';
import chupitraki2 from '../../../public/chupitraki2.png';
import chupitraki3 from '../../../public/chupitraki3.png';
import chupitraki4 from '../../../public/chupitraki4.png';
import styled from "styled-components";
import imgLink from '../../../public/enlace.png'
import imgLink2 from '../../../public/enlace2.png'
import { Link } from "react-router-dom";

const CarouselContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`

export default function Proyectos() {

    const imagesWidi = [widi1, widi2, widi3, widi4, widi5, widi6, widi7, widi8];
    const imagesChupitraki = [chupitraki1, chupitraki2, chupitraki3, chupitraki4];
    return (
        <div>
            <h1>Proyectos</h1>
            <CarouselContainer>
                <div>
                    <div className="flex justify-center items-center">
                        <Link to='https://github.com/guadafestinese96/widistore' target="_blank">
                            <div className="flex m-1 justify-center items-center bg-[#ED6BBF] w-20 rounded hover:bg-white">
                                <p className='m-1'>Code</p>
                                <img src={imgLink} className="w-6 h-6" alt='imgLink' />
                            </div>
                        </Link>
                        <Link to='https://widistore.vercel.app/' target="_blank">
                            <div className="flex m-1 justify-center items-center bg-[#ED6BBF] w-20 rounded hover:bg-white">
                                <p className='m-1'>Page</p>
                                <img src={imgLink} className="w-6 h-6" alt='imgLink' />
                            </div>
                        </Link>
                    </div>
                    <Carousel images={imagesWidi} />
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <Link to='https://github.com/guadafestinese96/chupitraki-page' target="_blank">
                            <div className="flex m-1 justify-center items-center bg-[#ED6BBF] w-20 rounded hover:bg-white">
                                <p className='m-1'>Code</p>
                                <img src={imgLink} className="w-6 h-6" alt='imgLink' />
                            </div>
                        </Link>
                        <Link to='https://distribuidora-chupitraki.vercel.app/' target="_blank">
                            <div className="flex m-1 justify-center items-center bg-[#ED6BBF] w-20 rounded hover:bg-white">
                                <p className='m-1'>Page</p>
                                <img src={imgLink} className="w-6 h-6" alt='imgLink' />
                            </div>
                        </Link>
                    </div>
                    <Carousel images={imagesChupitraki} />
                </div>

                
            </CarouselContainer>
        </div>

    )
}

/*
https://widistore.vercel.app/<Carousel images={imagesChupitraki} />
*/