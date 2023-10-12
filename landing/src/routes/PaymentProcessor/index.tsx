import { component$ } from "@builder.io/qwik";
import Hero from '../../components/hero/Hero'
import PayHero from '../../assets/pay/PayHero.svg'
import NavbarProduct from "~/components/navbar/NavbarProduct";

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
      link2="/PaymentProcessor"
      />
    </>
  ) 
});
