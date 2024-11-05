import { NavLink } from 'react-router-dom'
import './Header.css'
import workerGif from '../../../public/worker.gif'
import styled from 'styled-components';

const links = [
    {
        path: "/proyectos",
        label: "proyectos"
    }, {
        path: "/skills",
        label: "skills"
    }, {
        path: "/cv",
        label: "cv"
    }
]

const Gif = styled.img`
border-radius: 50%;
border: 3px solid black;
width: 100px;
height: 100px;
padding: 10px;
background-color: var(--colorPrimario);
`

export default function Header() {
    return (
        <div className='divHeader'>
            <Gif src={workerGif} alt='workerGif' className='w-40 rounded-5xl' />

            <ul className='ulHeader'>
                {links.map((link, index) => (
                    <NavLink to={link.path} key={index}>
                        <li className='liHeader' key={index}>{link.label}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

