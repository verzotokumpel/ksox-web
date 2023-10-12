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

  const mobileNav = useSignal(false);

  return(
    <div class="fixed w-full !z-10 bg-[#040C18] shadow-xl">
        <div class="flex mx-auto justify-between max-w-[1400px] py-5 px-5 lg:px-8 text-md ">

          <a href="/">
            <img src={logoNav} alt="logo" width={120} height={60}/>
          </a>

          <div class="hidden lg:flex items-center">
            {NavItems.map((item) => (
              item.id <= 1 ? (
                <div key={item.id} class="flex">
                  <a href={item.href}>
                  <h3 class="px-5 hover:text-white duration-300">{item.name}</h3>
                  </a>
                  <img src={DotIcon} alt="dot" width={5} height={5}/>
                </div>
              ) : (
                <div key={item.id}>
                  <a href={item.href}>
                  <h3 class="pl-5 hover:text-white duration-300">{item.name}</h3>
                  </a>
                </div>
              )
            ))}
          </div>
          
          <a href={props.linkToApp} target="_blank">
            <button class="hidden lg:block text-lg border-2 px-3 rounded-full border-blue-700 hover:border-blue-500 duration-300">
              Lunch App
            </button>
          </a>

            <div class="lg:hidden pt-2" onClick$={() => (mobileNav.value = !mobileNav.value)}>
              {mobileNav.value ? 
                <div class="flex">
                  <p class="pr-4 pt-1">Close</p>
                  <img src={TimesIcon} alt="close menu icon" width={16} height={16}/>
                </div> 
                : 
                <img src={BarsIcon} alt="open menu icon" width={16} height={16}/>
                }
            </div>  
        </div>

          <div class={mobileNav.value ? 'lg:hidden' : 'hidden'}>
            <div class="h-screen" style="background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;">
              <div class="mt-20">
                  {NavItems.map((item) => (
                  <a key={item.id} href={item.href} class="flex mx-auto justify-center pt-8" onClick$={() => (mobileNav.value = !mobileNav.value)}>
                    <h2>{item.name}</h2>
                  </a>
                  ))}
              </div>
              
              <button class="flex mx-auto mt-8 text-lg border-2 px-3 rounded-full border-blue-700 hover:border-blue-500 duration-300">
                <a href={props.linkToApp} target="_blank">
                Lunch App
                </a>
              </button>
            </div>
          </div>

    </div> 
  ) 
});
