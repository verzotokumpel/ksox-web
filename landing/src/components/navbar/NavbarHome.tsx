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
      href: "/"
    }, {
      id: 2,
      name: "About Products",
      href: "#about"
    }, {
      id: 3,
      name: "Contact",
      href: "#contact"
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

  const mobileNav = useSignal(false)

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
                    <h3 class="px-5 hover:text-white duration-300">{item.name}</h3>
                    </a>
                    <img src={DotIcon} alt="dot" class="w-[5px]"/>
                  </div>
                ) : (
                  <div>
                    <a href={item.href}>
                    <h3 class="pl-5 hover:text-white duration-300">{item.name}</h3>
                    </a>
                  </div>
                )
              ))}
            </div>

            <div class="lg:hidden pt-3" onClick$={() => (mobileNav.value = !mobileNav.value)}>
              {mobileNav.value ? 
                <div class="flex">
                  <p class="pr-4 pt-1">Close</p>
                  <img src={TimesIcon} alt="close menu icon" class="w-[16px]"/>
                </div> 
                : 
                <img src={BarsIcon} alt="open menu icon" class="w-[16px]"/>
                }
            </div>  
        </div>

          <div class={mobileNav.value ? 'lg:hidden' : 'hidden'}>
            <div class="h-screen" style="background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;">
              <div class="mt-20">
                  {NavItems.map((item) => (
                  <a href={item.href} class="flex mx-auto justify-center pt-8" onClick$={() => (mobileNav.value = !mobileNav.value)}>
                    <h2>{item.name}</h2>
                  </a>
                  ))}
              </div>
              
              {/*add social media icons*/}
            </div>
          </div>
    </div> 
  ) 
});
