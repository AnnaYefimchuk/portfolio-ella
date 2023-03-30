import { useNavigate } from 'react-router-dom';
import Photo from "./IMG_6428.JPG"
import './about.css';
import youtube from "../img/youtube.png"
import facebook from "../img/facebook.png"
import instagram from "../img/insta.png"
import tiktok from "../img/Tiktok.png"

export default function AboutAuthor(props) {

    const navigate = useNavigate();
    const aboutUser = () => {
        navigate('/about'); 
    }

    return (
        <div className="aboutBlock">
            <div className="aboutBlockContent">
                <img className="photoElla" src={Photo} alt="Елла Єфімчук" />
                <div className="infoBlock">
                    <h1>{props.name}</h1>
                    <p>Співачка, викладачка естрадного вокалу, членкиня спілки діячів естрадного мистецтва.
                        Учасниця телевізійних проектів “Галицький шлягер”, “Лесині джерела”, “Єднаймося друзі,бо ми українці”, “Прем’єра пісні”.
                        Концертна професійна діяльність на багатьох концертних майданчиках України, зарубіжжя та престижних концертних залах Києва, таких, як Палац “Україна”, “Freedom Hоll”.
                        Стаж викладацької роботи з 2008 року.</p>
                    <button className={props.classNames} onClick={aboutUser}>Детальніше</button>
                </div>
            </div>
        </div >
    );
}


export function About() {
    return (
        <div className='about'>
            <AboutAuthor name="Елла Єфімчук" classNames="btnToTheLessons2" />

            <div className="additionalInfoBlock" >

                <div className="additionalInfoBlockEducation">
                    <h2>Навчання</h2>
                    <p>Закінчила музичну школу #2 по класу акордеону.</p>
                    <p>У 1996 закінчила Київське училище культури(музичне мистецтво).</p>
                    <p>У 2016 — Національну академію керівних кадрів культури і мистецтв (магістратура) напрям “Музичне мистецтво”, фах- концертний виконавець(естрадний спів), викладач фахових дисциплін.</p>
                </div>

                <div className="additionalInfoBlockExperience">
                    <h2>Досвід</h2>
                    <p>Член журі міжнародних та всеукраїнських конкурсів:
                        “Jam”;
                        “ZirkaFest”;
                        “Чайка”;
                        “Кришталевий фонтан”.</p>
                    <p>Учасниця телевізійних проектів “Галицький шлягер”, “Лесині джерела”, “Єднаймося друзі,бо ми українці”, “Прем’єра пісні”.</p>
                </div>

                <div className="additionalInfoBlockArt">
                    <h2>Моя творчість</h2>
                    <div className='linkBlock'>
                        <a href="https://www.youtube.com/@ELLAYefimchuk" target="_blank" ><img className="logo1" src={youtube} alt="youtube" /> </a>
                        <a href="https://www.facebook.com/ella.efimchyk" target="_blank" ><img className="logo1" src={facebook} alt="facebook" /> </a>
                        <a href="https://www.instagram.com/ol.ena205/" target="_blank" ><img className="logo1" src={instagram} alt="instagram" />  </a>
                        <a href="https://www.tiktok.com/@yefimchuk" target="_blank" ><img className="logo1" src={tiktok} alt="tiktok" /> </a>
                    </div>
                </div>

            </div>
        </div>
    )
}