import { Title } from "@/components/elements/Texts";
import { Section } from "@/components/elements/Section";
import Cards from "@/components/elements/Cards";

import { textCard } from "./content";

export default function Learn() {
  return (
    <Section className="flex justify-center px-4 pt-12 pb-32">
      <div className="grid grid-cols-2 items-center">
        <div className="flex flex-col gap-10 text-center">
          <div className="max-w-[max-content]">
            <Title
              as="h2"
              className="text-center mb-4 text-[28px] md:text-[50px] font-semibold text-yellowscale-800 tracking-[-1.2px] leading-[69px]"
            >
              <div className="text-black">Você vai</div>

              <div className="text-black">aprender a:</div>
            </Title>
          </div>
        </div>

        <Cards
          accentColor="bg-yellowscale-800"
          text={textCard}
          px="px-8"
          py="py-8"
          maxWidth="max-w-[729px]"
          margin="ml-0"
          textAlign="text-center"
          shadowBox="right-shadow-box"
          gap="gap-10"
          visible="hidden"
        />
      </div>
    </Section>
  );
}
