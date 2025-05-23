
import Icon1 from "../../assets/Recurso 37.svg"
import Cel from "../../assets/formato_fecha.png"
import { translation } from "../../assets/constants/translations";
import './styles.css';

const SecondPage = ({guest}) => {
    const lang = guest.lang
    return (
        <section className="save-date-section">
            <div className="page__info">
                <img style={{width:"45px"}} src={Icon1} alt="Calendario" />
                <h2 className="subtitle">{translation.save_the_date[lang]}</h2>
                <h1 className="names">Camilo & Aleksandra</h1>
                <p className="date">{translation.date_time[lang]}</p>
            </div>
            <div>
                <img style={{height:"300px", marginTop: "20px"}} src={Cel} alt="" />
            </div>
           
        </section>
    );
};

export default SecondPage;
