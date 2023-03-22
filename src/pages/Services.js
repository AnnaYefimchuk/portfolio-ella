import couple from "../img/couple.png"
import group from "../img/group.png"
import online from "../img/online.png"
import solo from "../img/solo.png"
import './services.css';

export function Services() {
    return (
        <div className="sizeBlock">
            <h1 className="services">Послуги</h1>
            <div className="services">
                <div className="servicesBlockElement">
                    <img src={solo} alt="Індивідуальні заняття" className="servicesImg" />
                    <div className="servicesInfo">Індивідуальні заняття</div>
                </div>

                <div className="servicesBlockElement">
                    <img src={couple} alt="Парні заняття" className="servicesImg" />
                    <div className="servicesInfo">Парні заняття</div>
                </div>

                <div className="servicesBlockElement">
                    <img src={group} alt="Групові заняття" className="servicesImg" />
                    <div className="servicesInfo">Групові заняття</div>
                </div>

                <div className="servicesBlockElement">
                    <img src={online} alt="Онлайн заняття" className="servicesImg" />
                    <div className="servicesInfo">Заняття Онлайн</div>
                </div>
            </div>
        </div>
    )
}