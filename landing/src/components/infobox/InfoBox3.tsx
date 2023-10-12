import { component$ } from "@builder.io/qwik";

interface ModalProps {
    image?: string,
    title?: string,
    text?: string,
    rightSide?: boolean,
}

export default component$((props: ModalProps) => {
  return(
    <div class="py-10 sm:py-16 sm:my-20 px-10">
        <div class="grid md:grid-cols-2 items-center">
        {props.rightSide ? (
          <>
            <div class="md:text-left md:pr-10">
              <h2 class="font-semibold text-xl sm:text-3xl pb-2 sm:pb-5 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-300">{props.title}</h2>
              <p class="text-sm sm:text-lg">{props.text}</p>
            </div>
            <div class="hidden sm:flex">
              <img src={props.image} width={280} height={300}/>
            </div>
          </>
        ) : (
          <>
            <div class="justify-end pr-10 hidden sm:flex">
              <img src={props.image} width={280} height={300}/>
            </div>
            <div class="md:text-right">
              <h2 class="font-semibold text-xl sm:text-3xl pb-2 sm:pb-5 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-300">{props.title}</h2>
              <p class="text-sm sm:text-lg">{props.text}</p>
            </div>
          </>
        )}
        </div>
    </div>
  ) 
});
