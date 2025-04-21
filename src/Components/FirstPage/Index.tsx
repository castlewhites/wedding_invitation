import Icon4 from "../../assets/Recurso 7.svg"
import Icon3 from "../../assets/Recurso 11.svg"
import Icon2 from "../../assets/Recurso 18.svg"
import Icon1 from "../../assets/Recurso 37.svg"
import './styles.css';

const FirstPage = ({ scrollToSecond, scrollToThird, scrollToFourth }: any) => {
  return (
    <section className="save-date-section">

      <h2 className="subtitle">SAVE THE DATE</h2>
      <h1 className="names">Camilo y Aleksandra</h1>

      <div>
        <p className="invitation-text">INVITAMOS A:</p>
        <h2 className="guests">Kevin Castiblanco<br />& Daniela Gaviria</h2>
      
        <button className="wedding-button">A nuestra boda</button>
        <p className="wedding-date">04.10.25.</p>
      </div>

      <div className="icons-section">
        <div className="icon-card">
          <img src={Icon1} alt="Calendario" onClick={scrollToSecond}/>
          <p>Fecha y hora</p>
        </div>
        <div className="icon-card">
          <img src={Icon2} alt="Ubicación" onClick={scrollToThird}/>
          <p>Lugar</p>
        </div>
        <div className="icon-card">
          <img src={Icon3} alt="Dress Code" onClick={scrollToFourth}/>
          <p>Dress Code</p>
        </div>
        <div className="icon-card">
          <img src={Icon4} alt="Menú" />
          <p>Menú</p>
        </div>
      </div>

    </section>
  );
};

export default FirstPage;
