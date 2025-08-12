import { Title } from "@/components/elements/Texts";
import Image from "next/image";
import { textCard1, textCard2 } from "./content";
import Cards from "@/components/elements/Cards";
import { Section } from "@/components/elements/Section";

export default function Realized() {
  return (
    <Section className="flex justify-center px-4 pt-20 lg:pt-53 pb-30 lg:pb-65 relative">
      <div className="mb-2">
        <Title
          as="h2"
          className="ml-12 text-[56px] lg:text-[64px] font-medium text-purplescale-800 absolute top-[3.5rem] lg:top-[11.5rem] title-shadow leading-[69px] tracking-[-1.28px]"
        >
          VOCÊ JÁ PERCEBEU QUE:
        </Title>
      </div>

      <Cards
        accentColor="bg-bluescale-800"
        text={textCard1}
        px="px-8"
        py="py-10 lg:py-20"
        maxWidth="max-w-[1180px]"
        margin="ml-0"
        textAlign="text-center"
        shadowBox="right-shadow-box"
        gap="gap-5"
        visible="hidden"
      />
      <div className="relative">
        <Cards
          position="relative lg:absolute"
          accentColor="bg-yellowscale-800"
          text={textCard2}
          maxWidth="max-w-[825px]"
          right="lg:right-[-3rem] 3xl:-right-[-5rem]"
          top="top-8 lg:top-[-3rem]"
          px="px-24"
          py="py-8"
          shadowBox="left-shadow-box"
          visible="hidden"
        />
      </div>

      <div className="relative hidden lg:block ">
        <div className="absolute -top-[45rem] -right-[17rem] 3xl:-right-[7rem] py-[26%] max-w-[582px] w-full hidden md:block">
          <Image src="/images/pictures/puzzle.png" alt="Puzzle" fill />
        </div>
      </div>
    </Section>
  );
}
