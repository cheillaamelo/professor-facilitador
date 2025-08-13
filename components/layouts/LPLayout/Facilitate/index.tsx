import { Section } from "@/components/elements/Section";
import Image from "next/image";
import { Title, TextPrimary, TextSecondary } from "@/components/elements/Texts";
import { ButtonPrimary } from "@/components/elements/Button";

export default function Facilitate() {
  return (
    <Section className="py-16 lg:py-36 bg-purplescale-800">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-30 relative mb-12">
        <div className="flex flex-col">
          <div className="lg:w-[max-content]">
            <Title
              as="h2"
              className="text-center lg:text-left mb-11 text-[34px] md:text-[52px] lg:text-[60px] font-medium text-yellowscale-800 tracking-[-1.2px] leading-[40px] md:leading-[60px] lg:leading-[69px]"
            >
              <div>Facilitar não é</div>
              <div className="text-white">“ser o professor legal”</div>
            </Title>
          </div>

          <TextPrimary className="text-grayscale-100 text-base font-light md:text-2xl leading-[150%]">
            <div className="mb-8">
              <TextSecondary className="text-center lg:text-left text-[24px] md:text-[30px] lg:text-[35px] leading-[30px] md:leading-[40px] tracking-[-0.8px] font-normal text-white">
                É criar espaços de encontro reais, com escuta, coragem e
                construção coletiva.
              </TextSecondary>
            </div>
          </TextPrimary>
        </div>

        <div className="relative flex items-end flex-col justify-end">
          <div className="relative py-[13%] w-full">
            <Image
              fill
              src="/images/pictures/info-new.png"
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden relative">
        <div className="w-full bg-yellowscale-800 py-[1rem] px-[24px] rounded-xl">
          <TextSecondary className="text-xl md:text-[35px] leading-[40px] tracking-[-0.8px] font-bold text-center">
            E você pode começar agora.
          </TextSecondary>
        </div>
        <div className="w-full h-full p-4 mx-auto">
          <ButtonPrimary
            href="https://www.sympla.com.br/preview-online/47c819aaeef3f7432df1f669410afd24"
            target="_blank"
          >
            <TextPrimary className="font-bold text-[18px] md:text-[23px]">
              Garanta sua vaga aqui
            </TextPrimary>
          </ButtonPrimary>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <div className="w-full flex justify-between bg-yellowscale-800 py-[1rem] px-[24px] rounded-xl">
          <TextSecondary className="text-[35px] leading-[40px] tracking-[-0.8px] font-bold">
            E você pode começar agora.
          </TextSecondary>
          <TextPrimary className="font-bold text-[23px] mr-[7rem] ">
            <a
              href="https://www.sympla.com.br/preview-online/47c819aaeef3f7432df1f669410afd24"
              target="_blank"
            >
              Garanta sua vaga aqui
            </a>
          </TextPrimary>
        </div>
      </div>
    </Section>
  );
}
