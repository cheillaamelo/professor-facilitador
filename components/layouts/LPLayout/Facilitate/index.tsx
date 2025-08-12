import { Section } from "@/components/elements/Section";
import Image from "next/image";
import { Title, TextPrimary, TextSecondary } from "@/components/elements/Texts";
import { ButtonPrimary } from "@/components/elements/Button";

export default function Facilitate() {
  return (
    <Section className="pt-16 lg:pt-7 pb-16 lg:pb-30 bg-purplescale-800">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 relative">
        <div className="flex flex-col justify-start py-0 lg:py-32">
          <div className="lg:w-[max-content]">
            <Title
              as="h2"
              className="text-center lg:text-left mb-5 text-[52px] lg:text-[60px] font-medium text-yellowscale-800 tracking-[-1.2px] leading-[60px] lg:leading-[69px]"
            >
              <div>Facilitar não é</div>
              <div className="text-white">“ser o professor legal”</div>
            </Title>
          </div>

          <TextPrimary className="text-grayscale-100 text-base font-light md:text-2xl leading-[150%]">
            <div className="mb-8">
              <TextSecondary className="text-center lg:text-left text-[30px] lg:text-[35px] leading-[40px] tracking-[-0.8px] font-normal text-white">
                É criar espaços de encontro reais, com escuta, coragem e
                construção coletiva.
              </TextSecondary>
            </div>
          </TextPrimary>
        </div>

        <div className="relative flex items-end flex-col justify-end">
          <div className="relative py-[29%] w-full">
            <Image
              fill
              src="/images/pictures/info.png"
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden relative">
        <div className="w-full bg-yellowscale-800 absolute top-[-9rem] z-2 py-[1rem] px-[24px] rounded-xl">
          <TextSecondary className="text-[35px] leading-[40px] tracking-[-0.8px] font-bold text-center">
            E você pode começar agora.
          </TextSecondary>
        </div>
        <div className="w-full h-full p-4 mx-auto">
          <ButtonPrimary href="#">
            <TextPrimary className="font-bold text-[23px]">
              Garanta sua vaga aqui
            </TextPrimary>
          </ButtonPrimary>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <div className="w-full flex justify-between bg-yellowscale-800 absolute top-[-7rem] z-2 py-[1rem] px-[24px] rounded-xl">
          <TextSecondary className="text-[35px] leading-[40px] tracking-[-0.8px] font-bold">
            E você pode começar agora.
          </TextSecondary>
          <TextPrimary className="font-bold text-[23px] mr-[7rem] ">
            Garanta sua vaga aqui
          </TextPrimary>
        </div>
      </div>
    </Section>
  );
}
