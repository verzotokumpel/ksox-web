import { component$ } from "@builder.io/qwik";
import Hero from '../../components/hero/Hero'
import ExchangeHero from '../../assets/exchange/ExchangeHero.svg'
import NavbarProduct from "~/components/navbar/NavbarProduct";

export default component$(() => {
  return(
    <>
      <NavbarProduct 
      linkToApp="https://app.ksox.finance/"
      />
      <Hero 
      image={ExchangeHero} 
      title="Key to a Future Free From Financial Constraints." 
      text="Our mission at KSOX is to design a user-centric ecosystem that democratizes financial control."
      buttonText1="Lunch App"
      buttonText2="Read More"
      link1="https://app.ksox.finance/"
      link2="/Exchange"
      />
    </>
  ) 
});
