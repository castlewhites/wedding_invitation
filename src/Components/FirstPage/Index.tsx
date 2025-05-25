
/* import Icon4 from "../../assets/Recurso 7.svg"
import Icon3 from "../../assets/Recurso 11.svg" */
import Icon2 from "../../assets/Recurso 18.svg"
import Icon1 from "../../assets/Recurso 37.svg"
import { translation } from "../../assets/constants/translations"
import { Guest } from "../../assets/constants/guest"
import './styles.css';

type FirstPage = {
  scrollToSecond: () => void;
  scrollToThird: () => void;
  scrollToFourth: ()=> void;
  guest: Guest
}
const FirstPage = ({ scrollToSecond, scrollToThird, scrollToFourth, guest  }: FirstPage) => {
  const lang = guest.lang
  console.log(scrollToSecond,scrollToFourth);
  
  return (
    <section className="save-date-section">
      <h2 className="subtitle">{translation.save_the_date[lang]}</h2>
      <h1 className="names">Camilo & Aleksandra</h1>
     

      <div>
        <p className="invitation-text">{translation.invitation[lang]}</p>
        <h2 className="guests">{guest!.name}</h2>
      
        <button className="wedding-button">{translation.to_our_wedding[lang]}</button>
        <p className="wedding-date">{translation.more_info[lang]}</p>
      </div>

      <div className="icons-section">
        <div className="icon-card">
          <img src={Icon1} alt="Calendario" onClick={scrollToSecond}/>
          <p>{translation.date_time[lang]}</p>
        </div>
        <div className="icon-card">
          <img src={Icon2} alt="Ubicación" onClick={scrollToThird}/>
          <p>{translation.place[lang]}</p>
        </div>
        {/* <div className="icon-card">
          <img src={Icon3} alt="Dress Code" onClick={scrollToFourth}/>
          <p>Dress Code</p>
        </div> */}
        {/* <div className="icon-card">
          <img src={Icon4} alt="Menú" />
          <p>{translation.menu[lang]}</p>
        </div> */}
      </div>

    </section>
  );
};

export default FirstPage;
