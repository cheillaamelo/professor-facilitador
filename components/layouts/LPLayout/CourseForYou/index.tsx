import { Title } from "@/components/elements/Texts";
import CardsGrid from "@/components/elements/CardsGrid";
import { items } from "./content";
import { Section } from "@/components/elements/Section";
import Image from "next/image";

export default function CourseForYou() {
  return (
    <Section className="px-6 pt-12 md:pt-16 pb-0 lg:py-27 relative">
      <Title
        as="h2"
        className="text-center text-black text-[32px] md:text-[50px] lg:text-[64px] mb-7 md:mb-13 lg:mb-20 font-medium leading-[38px] md:leading-[50px] tracking-[-1.28px] relative"
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
        fontSize="text-[24px] md:text-[30px] lg:text-[36px]"
        leading="50px"
        tracking="-0.72px"
        textComponent="secondary"
        px="px-4 md:px-15"
        py="py-8"
        gap="gap-10"
      />
      <div className="hidden lg:block relative">
        <div className="absolute top-[-19rem] 3xl:top-[-16rem] right-[10rem] 3xl:right-[17rem] py-[17%] 3xl:py-[14%] max-w-[373px] w-full">
          <Image src="/images/pictures/lupa.svg" alt="Puzzle" fill />
        </div>
      </div>
    </Section>
  );
}
