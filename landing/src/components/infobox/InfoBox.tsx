import { component$ } from "@builder.io/qwik";

interface ModalProps {
    image?: string,
    title?: string,
    text?: string,
    linkToApp?: string,
    pathToReadMore?: string,
}

export default component$((props: ModalProps) => {
  return(
    <div class="py-16 sm:mx-10 px-10 border-2 rounded-2xl my-20">
        <div class="grid lg:grid-cols-2 items-center">
            <div class="lg:pr-20 text-center lg:text-left">
                <h2 class="font-semibold text-xl sm:text-2xl md:text-3xl">{props.title}</h2>
                <p class="text-md py-5 sm:py-10">{props.text}</p>
                <div class="flex justify-center lg:justify-start pb-5 sm:pb-10 lg:pb-0">
                    <a href={props.linkToApp} target="_blank">
                    <button class="border-2 rounded-full py-1 px-3 border-blue-500 mr-5 hover:bg-slate-100 duration-300">Lunch App</button>
                    </a>
                    <a href={props.pathToReadMore}>
                    <button class="border-2 rounded-full py-1 px-3 border-blue-500 hover:bg-slate-100 duration-300">Read More</button>
                    </a>
                </div>
            </div>
            <div class="hover:-skew-x-1 duration-500">
                <a href={props.linkToApp} target="_blank">
                    <img src={props.image} class="rounded-2xl shadow-lg"/>
                </a>
            </div>
        </div>
    </div>
  ) 
});
