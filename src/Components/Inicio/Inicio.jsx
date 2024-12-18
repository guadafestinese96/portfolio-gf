import styled from 'styled-components';
import Skils from '../Skills/Skills';
import CvPdf from '../CvPdf/CvPdf';
import Proyectos from '../Proyectos/Proyectos';
import './Inicio.css'
import Header from '../Header/Header';


const Title = styled.h1`
   font-family: "Qwitcher Grypen", cursive;
  font-weight: 700;
  font-style: normal;
  font-size: 75px;
  color:rgba(237,107,191);

  @media (max-width: 500px){
  font-size: 50px;
  }

  `

const Title2 = styled.h2`
  font-family: "Anton SC", sans-serif;
  font-weight: 200;
  font-style: normal;
    font-size: 36px;
  color:var(--colorSecundario);
  text-transform:uppercase;
    @media (max-width: 500px){
     font-size: 25px;
   }
  `

  const Title3 = styled.h3`
  font-size: 25px;
  font-family: "Anton SC", sans-serif;
  font-weight: 200;
  font-style: normal;
  color:white;
  text-transform:uppercase;
  @media (max-width: 500px){
     font-size: 20px;
   }
  `


const ContainerIndex = styled.div`
  
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 300px;
    
    
`

const ContainerHeaderInfo = styled.div`
display: flex; 
justify-content: space-between;
padding: 5px 50px 5px 50px;
align-items:center;
background-color:black;
justify-content:center;
    align-items:center;
`

export default function Inicio() {
  return (
    <ContainerIndex>
      <Header/>
      <ContainerHeaderInfo className='containerHeaderInfo'>
      <div >
      <Title className='mole'>Guadalupe Festinese</Title>
      <Title2>· Frontend Developer ·</Title2>
      <Title3>React JS</Title3>
      <p>guadalupefestinese</p>
      <p>guadalupefestinese</p>
      <p>guadalupefestinese</p>
      </div>
      
      </ContainerHeaderInfo>
      <Proyectos />
      <Skils />
      <CvPdf />
    </ContainerIndex>
  )
}

