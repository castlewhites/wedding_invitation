import { useRef } from "react";
import FirstPage from "../Components/FirstPage/Index"
import SecondPage from "../Components/SecondPage"
import ThirdPage from "../Components/ThirdPage"
import { guests } from "../assets/constants/guest";
//import FourthPage from "../Components/FourthPage"

import "./styles.css"


function Landing() {
  const secondRef = useRef<HTMLElement | null>(null);
  const thirdRef = useRef<HTMLElement | null>(null);
  const fourthRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
   const params = new URLSearchParams(window.location.search);
    const guestSlug = params.get("guest");
    const guest = guests.find(g => g.slug === guestSlug) || guests[0];

  return (
    <main className="main-container" >
        <section className='first-section'>
          <FirstPage 
            scrollToSecond={() => scrollToSection(secondRef)}
            scrollToThird={() => scrollToSection(thirdRef)}
            scrollToFourth={() => scrollToSection(fourthRef)} 
            guest={guest}
          />
           
        </section>
        <section ref={secondRef} className='second-section'>
            <SecondPage guest={guest}/>
        </section>
        <section ref={thirdRef} className='third-section'>
            <ThirdPage guest={guest}/>
        </section>
        {/* <section ref={fourthRef} className='fourth-section'>
            <FourthPage />
        </section> */}
        
    </main>
  )
}

export default Landing
