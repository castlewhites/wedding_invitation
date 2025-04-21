import { useRef } from "react";
import FirstPage from "../Components/FirstPage/Index"
import SecondPage from "../Components/SecondPage"
import ThirdPage from "../Components/ThirdPage"
import FourthPage from "../Components/FourthPage"

import "./styles.css"


function Landing() {
  const secondRef = useRef<HTMLElement | null>(null);
  const thirdRef = useRef<HTMLElement | null>(null);
  const fourthRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="main-container" >
        <section className='first-section'>
          <FirstPage 
            scrollToSecond={() => scrollToSection(secondRef)}
            scrollToThird={() => scrollToSection(thirdRef)}
            scrollToFourth={() => scrollToSection(fourthRef)} />
        </section>
        <section ref={secondRef} className='second-section'>
            <SecondPage />
        </section>
        <section ref={thirdRef} className='third-section'>
            <ThirdPage />
        </section>
        <section ref={fourthRef} className='fourth-section'>
            <FourthPage />
        </section>
        
    </main>
  )
}

export default Landing
