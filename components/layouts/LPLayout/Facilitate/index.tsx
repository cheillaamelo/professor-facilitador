import { Section } from "@/components/elements/Section";
import Image from "next/image";
import { Title, TextPrimary, TextSecondary } from "@/components/elements/Texts";

export default function Facilitate() {
  return (
    <Section className="pt-7 pb-30 bg-purplescale-800">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 relative">
        <div className="flex flex-col justify-start py-32">
          <div className="w-[max-content]">
            <Title
              as="h2"
              className="mb-5 text-[28px] md:text-[60px] font-medium text-yellowscale-800 tracking-[-1.2px] leading-[69px]"
            >
              <div>Facilitar não é</div>
              <div className="text-white">“ser o professor legal”</div>
            </Title>
          </div>

          <TextPrimary className="text-grayscale-100 text-base font-light md:text-2xl leading-[150%]">
            <div className="mb-8">
              <TextSecondary className="text-[35px] leading-[40px] tracking-[-0.8px] font-normal text-white">
                É criar espaços de encontro reais, com escuta, coragem e
                construção coletiva.
              </TextSecondary>
            </div>
          </TextPrimary>
        </div>

        <div className="relative flex items-end flex-col justify-end">
          <div className="hidden lg:block relative py-[29%] w-full">
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
      <div className="relative">
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
