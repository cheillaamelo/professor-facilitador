import { TextPrimary, TextSecondary, Title } from "@/components/elements/Texts";
import { Section } from "@/components/elements/Section";
import Cards from "@/components/elements/Cards";
import { textCard } from "./content";
import { ButtonPrimary } from "@/components/elements/Button";

export default function Blog() {
  return (
    <Section className="flex justify-center px-4 py-24">
      <div className="flex flex-col gap-10 text-center">
        <div>
          <TextSecondary className="text-bluescale-800 tracking-[-1.2px] leading-[69px] text-6xl font-bold">
            Conheça o Blog do
          </TextSecondary>
          <TextSecondary className="text-purplescale-800 tracking-[-1.2px] leading-[69px] text-6xl font-bold">
            Professor Facilitador
          </TextSecondary>
        </div>

        <div>
          <Title
            as="h4"
            className="mb-4 text-[40px] tracking-[-0.8px] leading-[46px] font-medium"
          >
            Um espaço com conteúdos gratuitos sobre:
          </Title>
        </div>
      </div>

      <Cards
        accentColor="bg-purplescale-800"
        text={textCard}
        px="px-18"
        py="py-20"
        maxWidth="max-w-[1028px]"
        margin="m-auto"
        textAlign="text-center"
        shadowBox="right-shadow-box"
        gap="gap-10"
        visible="hidden"
      />

      <div className="md:max-w-[425px] relative -top-[3rem] mx-auto p-4">
        <ButtonPrimary href="#">
          <TextPrimary className="font-bold text-[28px]">
            Acesse o blog aqui
          </TextPrimary>
        </ButtonPrimary>
      </div>
    </Section>
  );
}
