
import Icon4 from "../../assets/Recurso 7.svg"
import Icon3 from "../../assets/Recurso 11.svg"
import Icon2 from "../../assets/Recurso 18.svg"
import Icon1 from "../../assets/Recurso 37.svg"
import { guests } from "../../assets/constants/guest"
import { translation } from "../../assets/constants/translations"
import './styles.css';

const FirstPage = ({ scrollToSecond, scrollToThird, scrollToFourth }: any) => {

  const params = new URLSearchParams(window.location.search);
  const guestSlug = params.get("guest");
  const guest = guests.find(g => g.slug === guestSlug) || guests[0];
  return (
    <section className="save-date-section">

      <h2 className="subtitle">{translation.save_the_date['es']}</h2>
      <h1 className="names">Camilo & Aleksandra</h1>

      <div>
        <p className="invitation-text">INVITAMOS A:</p>
        <h2 className="guests">{guest!.name}</h2>
      
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
