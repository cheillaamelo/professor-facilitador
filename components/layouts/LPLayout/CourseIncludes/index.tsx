import { TextPrimary, TextSecondary, Title } from "@/components/elements/Texts";
import CardsGrid from "@/components/elements/CardsGrid";
import { items } from "./content";
import { Section } from "@/components/elements/Section";

export default function CourseIncludes() {
  return (
    <>
      <Section className="bg-bluescale-800 px-6 pt-24 pb-50">
        <Title
          as="h2"
          className="text-center text-yellowscale-800 text-2xl md:text-5xl mb-10 font-semibold leading-[69px] tracking-[-1.28px] relative"
        >
          O CURSO INCLUI:
        </Title>

        <CardsGrid
          accentColors={["bg-white text-black"]}
          items={items}
          lgGrid="lg:grid-cols-3"
          gap="gap-8"
          py="py-8"
          px="px-8"
        />
      </Section>
      <div className="relative">
        <div className="w-full flex absolute top-[-11rem] left-[2.5rem]">
          <div className="bg-purplescale-800 px-6 py-4 relative left-[-2rem] right-shadow-box max-w-[1192px] w-full text-right pr-[7rem] 3xl:[pr-[10rem]">
            <TextSecondary className="text-[36px] leading-[40px] tracking-[-0.72px]">
              <strong>Bônus: </strong>E-book completo Professor Facilitador.
            </TextSecondary>
          </div>
          <div className="flex items-center rounded-xl z-2 relative right-[3rem] max-w-[360px] 3xl:max-w-[430px] w-full bg-yellowscale-800 right-shadow-box">
            <TextPrimary className="font-bold text-[23px] px-[1rem] 3xl:px-[3rem]">
              Quero garantir minha vaga
            </TextPrimary>
          </div>
        </div>
      </div>
    </>
  );
}
