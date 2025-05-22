import Icon2 from "../../assets/Recurso 18.svg"

import './styles.css';

const ThirdPage = () => {
    return (
        <section className="save-date-section">
            <div className="page__info">
                <img style={{ width: "45px" }} src={Icon2} alt="Calendario" />
                <h2 className="subtitle">SAVE THE DATE</h2>
                <h1 className="names">Camilo & Aleksandra</h1>
                <p className="date">Lugar</p>
            </div>
            <div>
                <div className="iframe-container" >
                    <iframe
                        title="Mapa"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9658.777299303089!2d15.7265487!3d52.7557497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4706c13e6e43aa67%3A0xa6b876d591173017!2sZa%20lasem!5e0!3m2!1ses-419!2sco!4v1745185879135!5m2!1ses-419!2sco"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </section>
    );
};

export default ThirdPage;
