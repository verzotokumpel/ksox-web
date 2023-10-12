import { component$ } from "@builder.io/qwik";
import Discord from '../../assets/icons/Discord.svg'
import Telegram from '../../assets/icons/Telegram.svg'
import LinkedIn from '../../assets/icons/LinkedIn.svg'
import XIcon from '../../assets/icons/XIcon.svg'

export default component$(() => {

  const contactItems = [
    {
      id: 1,
      icon: Discord,
      link: "https://discord.com/invite/d9qn83Qnbv",
    },{
      id: 2,
      icon: Telegram,
      link: "https://t.me/ksox_community",
    },{
      id: 3,
      icon: LinkedIn,
      link: "https://www.linkedin.com/company/ksox/",
    },{
      id: 4,
      icon: XIcon,
      link: "https://twitter.com/KsoxExchange",
    }
  ]


  return(
    <div class="py-32" style="background: radial-gradient(circle at center bottom, rgb(20, 20, 60) 0%, rgba(40, 100, 255, 0) 60%); top: 0; left: 0; --tw-bg-opacity: 30%;">
        <div class="max-w-[1200px] mx-auto px-4 md:px-20 lg:px-10">

        <div class="flex mx-auto justify-center border-2 py-12 rounded-2xl mb-20" id="contact">
          <div class="text-center">
            <h1 class="text-2xl sm:text-5xl font-bold">Let's Stay in Touch!</h1>
            <p class="text-base sm:text-xl">Find us Here</p>
            <div class="flex justify-between pt-8 sm:pt-14">
              {contactItems.map((item) => (
                <a key={item.id} href={item.link} target="_blank">
                  <img src={item.icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3">
          
          <div class="text-left pr-5 sm:pr-14 text-sm sm:text-base">
            <h3 class="pb-5 font font-semibold text-base sm:text-2xl">Product</h3>

            <h4 class="font-semibold">Payment Processor</h4>
            <p class="pb-5">Ksox pay apps</p>

            <h4 class="font-semibold">Exchange app</h4>
            <p class="pb-5">Ksox Exchange trading platform</p>

            <h4 class="font-semibold">Whitepaper</h4>
            <p>Documentation about Cryptocurrency Exchange & Payment Processor</p>
          </div>

          <div class="text-center px-2 sm:px-10 text-sm sm:text-base">
            <h3 class="pb-5 font font-semibold text-base sm:text-2xl">Legal</h3>

            <h4 class="font-semibold">Privacy policy</h4>
            <p class="pb-5">Our policies around privacy and data gathering</p>

            <h4 class="font-semibold">Cookies policy</h4>
            <p class="pb-5">Our policies around cookies</p>

            <h4 class="font-semibold">Crowdsale terms</h4>
            <p>Our policies around crowdsale and token</p>
          </div>

          <div class="text-right pl-5 sm:pl-14 text-sm sm:text-base">
            <h3 class="pb-5 font font-semibold text-base sm:text-2xl">Technology</h3>

            <h4 class="font-semibold">Cairo</h4>
            <p class="pb-5">Turing-complete language for writing provable programs on blockchain </p>

            <h4 class="font-semibold">Rust</h4>
            <p class="pb-5">Multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency</p>

            <h4 class="font-semibold">Solidity</h4>
            <p>Language designed for developing smart contracts</p>
          </div>
        </div>
        </div>
    </div>

  ) 
});
