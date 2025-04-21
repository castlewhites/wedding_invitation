import Icon2 from "../../assets/Recurso 18.svg"
import Mujer from "../../assets/Recurso 12.png"
import Hombre from "../../assets/Recurso 14.png"

import './styles.css';

const fourthPage = () => {
    return (
        <section className="save-date-section">
            <div className="page__info">
                <img style={{ width: "45px" }} src={Icon2} alt="Calendario" />
                <h2 className="subtitle">SAVE THE DATE</h2>
                <h1 className="names">Camilo y Aleksandra</h1>
                <p className="date">DRESS CODE</p>
            </div>
            <div className="dresscode-wrapper">
                <div className="dresscode-content">

                    {/* MUJER */}
                    <div className="dresscode-block top-block">
                        <div className="circle-image">
                            <img src={Mujer} alt="Mujer" />
                        </div>
                        <div className="text-content">
                            <h3>MUJER</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>

                    {/* HOMBRE */}
                    <div className="dresscode-block bottom-block">
                        <div className="text-content">
                            <h3>HOMBRE</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                        <div className="circle-image">
                            <img src={Hombre} alt="Hombre" />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default fourthPage;
