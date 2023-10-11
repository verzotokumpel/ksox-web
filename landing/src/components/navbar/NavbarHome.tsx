import { component$, useSignal} from "@builder.io/qwik";
import logoNav from '../../assets/LogoNav.svg'
import DotIcon from '../../assets/icons/DotIcon.svg'
import BarsIcon from '../../assets/icons/BarsIcon.svg'
import TimesIcon from '../../assets/icons/TimesIcon.svg'

export default component$(() => {

  const NavItems = [
    {
      id: 1,
      name: "Whitepaper",
    }, {
      id: 2,
      name: "About Products",
    }, {
      id: 3,
      name: "Contact",
    }, {
      id: 4,
      name: "KSOX Pay",
      href: "/PaymentProcessor"
    }, {
      id: 5,
      name: "KSOX Exchange",
      href: "/Exchange"
    } 
  ]

  const mobileNav = useSignal(true);

  return(
    <div class="fixed w-full !z-10 bg-[#040C18] shadow-xl">
        <div class="flex mx-auto justify-between max-w-[1400px] py-5 px-5 lg:px-8 text-md ">

          <a href="/">
            <img src={logoNav} alt="logo" class="w-[120px]"/>
          </a>

          <div class="hidden lg:flex items-center">
            {NavItems.map((item) => (
              item.id <= 4 ? (
                <div key={item.id} class="flex">
                  <a href={item.href}>
                  <p class="px-5 hover:text-white duration-300">{item.name}</p>
                  </a>
                  <img src={DotIcon} alt="dot" class="w-[5px]"/>
                </div>
              ) : (
                <div>
                  <a href={item.href}>
                  <p class="pl-5 hover:text-white duration-300">{item.name}</p>
                  </a>
                </div>
              )
            ))}
          </div>

          <div class="lg:hidden pt-3" onClick$={() => mobileNav.value = !mobileNav}>
            <img src={mobileNav ? BarsIcon : TimesIcon} alt="NavIcon" class="w-[16px] h-[16px]"/>
          </div>  

        </div>
    </div> 
  ) 
});
