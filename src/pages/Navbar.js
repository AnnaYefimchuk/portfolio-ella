import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import './navbar.css';
import youtube from "../img/youtube.png"
import facebook from "../img/facebook.png"
import instagram from "../img/insta.png"

export function Navbar() {

    const navigate = useNavigate();
    const toTheLessons = () => {
        navigate('/contact');
    }

    return (
        <NavbarBs>
            <div className="firstHeader">
                <div className="firstHeaderLink">
                    <a href="tel:+380684458583">+380634358593</a> | <a href="mailto:anna.yefimchuk@gmail.com">anna.yefimchuk@gmail.com</a>
                </div>
                <div>
                    <a href="https://www.youtube.com/@ELLAYefimchuk" target="_blank" ><img className="logo" src={youtube} alt="youtube" /> </a>
                    <a href="https://www.facebook.com/ella.efimchyk" target="_blank" ><img className="logo" src={facebook} alt="facebook" /> </a>
                    <a href="https://www.instagram.com/ol.ena205/" target="_blank" ><img className="logo" src={instagram} alt="instagram" />  </a>
                </div>
            </div>

            <Container >
                <Nav className="secondHeader">
                    <div>
                        <Nav.Link to="/" as={NavLink} className="pageTitle"> Елла Єфімчук </Nav.Link>
                    </div>
                    <div className="secondHeaderNav">
                        <Nav.Link to="/about" as={NavLink}> Про мене </Nav.Link>
                        <Nav.Link to="/services" as={NavLink}> Послуги </Nav.Link>
                        <Nav.Link to="/testimonials" as={NavLink}> Відгуки </Nav.Link>
                        <Nav.Link to="/contact" as={NavLink}> Контакти </Nav.Link>
                        <button className="btnToTheLessonsNav" onClick={toTheLessons}>Записатись на урок</button>
                    </div>
                </Nav>
            </Container>
        </NavbarBs>
    )
}