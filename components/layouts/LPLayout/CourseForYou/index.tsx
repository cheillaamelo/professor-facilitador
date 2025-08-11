import { Title } from "@/components/elements/Texts";
import CardsGrid from "@/components/elements/CardsGrid";
import { items } from "./content";
import { Section } from "@/components/elements/Section";
import Image from "next/image";

export default function CourseForYou() {
  return (
    <Section className="px-6 py-27 relative">
      <Title
        as="h2"
        className="text-center text-black md:text-5xl mb-20 font-semibold leading-[69px] tracking-[-1.28px] relative"
      >
        Este curso é para você que:
      </Title>

      <CardsGrid
        items={items}
        accentColors={[
          "bg-purplescale-800 text-white",
          "bg-bluescale-800 text-white",
        ]}
        lgGrid="lg:grid-cols-2"
        fontSize="36px"
        leading="50px"
        tracking="-0.72px"
        textComponent="secondary"
        px="px-15"
        py="py-8"
        gap="gap-10"
      />
      <div className="relative">
        <div className="absolute top-[-21rem] 3xl:top-[-18rem] right-[10rem] 3xl:right-[17rem] py-[17%] 3xl:py-[14%] max-w-[373px] w-full hidden md:block">
          <Image src="/images/pictures/lupa.svg" alt="Puzzle" fill />
        </div>
      </div>
    </Section>
  );
}
