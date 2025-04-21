
import Icon1 from "../../assets/Recurso 37.svg"
import Cel from "../../assets/formato_fecha.png"
import './styles.css';

const SecondPage = () => {
    return (
        <section className="save-date-section">
            <div className="page__info">
                <img style={{width:"45px"}} src={Icon1} alt="Calendario" />
                <h2 className="subtitle">SAVE THE DATE</h2>
                <h1 className="names">Camilo y Aleksandra</h1>
                <p className="date">FECHA Y HORA</p>
            </div>
            <div>
                <img style={{height:"300px", marginTop: "20px"}} src={Cel} alt="" />
            </div>
           
        </section>
    );
};

export default SecondPage;
