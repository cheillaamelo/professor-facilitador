import { Title } from "@/components/elements/Texts";
import { Section } from "@/components/elements/Section";
import Cards from "@/components/elements/Cards";
import { textCard } from "./content";
// import Image from "next/image";

export default function WhoIs() {
  return (
    <Section className="flex justify-center px-4 py-33 relative">
      <div className="flex flex-col gap-10 text-center">
        <div className="max-w-[max-content]">
          <Title
            as="h2"
            className="text-left mb-4 text-[28px] md:text-[50px] font-semibold text-yellowscale-800 tracking-[-1.2px] leading-[69px]"
          >
            <div className="text-black">Quem é</div>

            <div className="text-purplescale-800">Rafa Davini?</div>
          </Title>
        </div>
      </div>

      <Cards
        accentColor="bg-purplescale-800"
        text={textCard}
        px="px-24"
        py="py-16"
        maxWidth="max-w-[1367px]"
        textAlign="text-center"
        shadowBox="right-shadow-box"
        text2="Psicanalista clínico, educador e facilitador com mais de 10 anos de experiência com formação de professores, facilitação de grupos e metodologias participativas. Mestre pela UNICAMP, é criador do projeto Professor Facilitador, com atuação em universidades (UNICAMP, PUCCAMP, USF, B42) e consultorias em empresas como AMBEV, Grupo Boticário, Mercedes-Benz, EMS, Danone, entre outras."
        text3="Especialista em:"
        gap="gap-3"
        maxWidth2="max-w-[550px]"
        gap2="gap-6"
        imageSrc="/images/pictures/whois.png"
        visible="block"
        position="relative"
      />
    </Section>
  );
}
