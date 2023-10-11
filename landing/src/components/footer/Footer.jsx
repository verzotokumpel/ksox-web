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
      link: "",
    },{
      id: 2,
      icon: Telegram,
      link: "",
    },{
      id: 3,
      icon: LinkedIn,
      link: "",
    },{
      id: 4,
      icon: XIcon,
      link: "",
    },
  ]


  return(
    <div class="py-32">
        <div class="max-w-[800px] mx-auto px-8 md:px-20 lg:px-0">

        <div class="flex mx-auto justify-center border-2 py-12 rounded-2xl mb-20">
          <div class="text-center">
            <h1 class="text-5xl font-bold">Let's Stay in Touch!</h1>
            <p class="text-xl">Find us Here</p>
            <div class="flex justify-between pt-14">
              {contactItems.map((item) => (
                <a key={item.id}>
                  <img src={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3">
          
          <div class="text-left">
            <h3 class="pb-5 font font-semibold text-2xl">Product</h3>

            <h4 class="font-semibold">Payment Processor</h4>
            <p class="pb-5">Lorem</p>

            <h4 class="font-semibold">Payment Processor</h4>
            <p class="pb-5">Lorem</p>

            <h4 class="font-semibold">Payment Processor</h4>
            <p>Lorem</p>
          </div>

          <div class="text-center">
            <h3 class="pb-5 font font-semibold text-2xl">Product</h3>

            <h4 class="font-semibold">Payment Processor</h4>
            <p class="pb-5">Lorem</p>

            <h4 class="font-semibold">Payment Processor</h4>
            <p class="pb-5">Lorem</p>

            <h4 class="font-semibold">Payment Processor</h4>
            <p>Lorem</p>
          </div>

          <div class="text-right">
            <h3 class="pb-5 font font-semibold text-2xl">Product</h3>

            <h4 class="font-semibold">Payment Processor</h4>
            <p class="pb-5">Lorem</p>

            <h4 class="font-semibold">Payment Processor</h4>
            <p class="pb-5">Lorem</p>

            <h4 class="font-semibold">Payment Processor</h4>
            <p>Lorem</p>
          </div>
        </div>
        </div>
    </div>

  ) 
});
