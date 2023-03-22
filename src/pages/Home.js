import { Services } from "./Services";
import { Contact } from "./Contact";
import { Testimonials } from "./Testimonials";
import AboutAuthor from "./About";
import './home.css';

export function Home() {
    return (
        <>
            <div className="homeBlock">
            </div>

            <AboutAuthor name="Про мене" classNames="btnToTheLessons" />

            <div className="basicBlock">  
            </div>
            <Services />
            <Testimonials/>
            <Contact />
        </>
    )
}