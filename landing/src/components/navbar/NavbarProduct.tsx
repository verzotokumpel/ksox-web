import { component$, useSignal} from "@builder.io/qwik";
import logoNav from '../../assets/LogoNav.svg'
import DotIcon from '../../assets/icons/DotIcon.svg'
import BarsIcon from '../../assets/icons/BarsIcon.svg'
import TimesIcon from '../../assets/icons/TimesIcon.svg'

interface ModalProps {
  linkToApp?: string,
}

export default component$((props: ModalProps) => {

  const NavItems = [
    {
      id: 0,
      name: "Home",
      href: "/"
    },{
      id: 1,
      name: "KSOX Pay",
      href: "/PaymentProcessor"
    }, {
      id: 2,
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
              item.id <= 1 ? (
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

          <button class="text-lg border-2 px-3 rounded-full border-blue-700 hover:border-blue-500 duration-300">
            <a href={props.linkToApp} target="_blank">
            Lunch App
            </a>
          </button>

          <div class="lg:hidden pt-3" onClick$={() => (!mobileNav.value)}>
            {mobileNav ? <img src={TimesIcon} /> : <img src={BarsIcon} />}
          </div>  

        </div>
    </div> 
  ) 
});
