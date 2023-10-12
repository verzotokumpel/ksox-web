import { component$ } from "@builder.io/qwik";
import Hero from '../../components/hero/Hero'
import PayHero from '../../assets/pay/PayHero.svg'
import NavbarProduct from "~/components/navbar/NavbarProduct";
import Footer from "~/components/footer/Footer";
//import InfoBox3 from "~/components/infobox/InfoBox3";

export default component$(() => {
  return(
    <>
      <NavbarProduct 
      linkToApp="https://pay.ksox.finance/"
      />
      <Hero 
      image={PayHero} 
      title="Key to a Future Free From Financial Constraints." 
      text="Our mission at KSOX is to design a user-centric ecosystem that democratizes financial control."
      buttonText1="Lunch App"
      buttonText2="Read More"
      link1="https://pay.ksox.finance/"
      link2="#readMore"
      />

      <div class="py-20 bg-white text-[#1D1D1D]" id="readMore">
        <div class="max-w-[1270px] mx-auto px-8 md:px-20 lg:px-0">
          <h2 class="lg:pl-10 font-bold text-2xl sm:text-4xl text-center lg:text-start">Discover KSOX Pay</h2>
          
        </div>
      </div>
      <Footer />
    </>
  ) 
});
