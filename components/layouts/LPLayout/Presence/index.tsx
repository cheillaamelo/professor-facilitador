import { ButtonPrimary } from "@/components/elements/Button";
import Cards from "@/components/elements/Cards";
import { TextPrimary, Title } from "@/components/elements/Texts";
import Image from "next/image";
import { textCard } from "./content";
import { Section } from "@/components/elements/Section";

export default function Presence() {
  return (
    <Section className="bg-purplescale-800 flex justify-center items-center px-6 pt-25">
      <div className="w-full flex flex-col md:flex-row items-center gap-10">
        <div className="text-white">
          <div className="max-w-[max-content] m-auto">
            <Title
              as="h2"
              className="mb-4 text-[28px] md:text-[45px] font-semibold text-yellowscale-800 tracking-[-1.2px] leading-[69px]"
            >
              <div>Você não precisa de</div>
              <div>mais conteúdo.</div>
              <div className="text-white">Precisa de presença</div>
            </Title>
          </div>

          <Cards
            accentColor="bg-white"
            text={textCard}
            px="px-18"
            py="py-8"
            shadowBox="left-shadow-box"
            visible="hidden"
          />

          <div className="md:max-w-[425px] relative -top-[2rem] -right-[21rem] h-full p-4">
            <ButtonPrimary href="#">
              <TextPrimary className="font-bold text-[28px]">
                Garanta sua vaga aqui
              </TextPrimary>
            </ButtonPrimary>
          </div>
        </div>

        <div className="relative py-[26%] w-full hidden md:block">
          <Image src="/images/pictures/light.png" alt="Light" fill />
        </div>
      </div>
    </Section>
  );
}
