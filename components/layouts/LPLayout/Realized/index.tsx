import { Title } from "@/components/elements/Texts";
import Image from "next/image";
import { textCard1, textCard2 } from "./content";
import Cards from "@/components/elements/Cards";
import { Section } from "@/components/elements/Section";

export default function Realized() {
  return (
    <Section className="flex justify-center px-4 pt-53 pb-65 relative">
      {/* <div className="w-full m-auto"> */}
      {/* <div className="max-w-[67rem] relative bg-bluescale-800 text-white rounded-[48px] right-shadow-box pl-8 pr-0  py-8 m-auto"> */}
      <div className="mb-2">
        <Title
          as="h2"
          className="text-2xl md:text-5xl font-bold text-purple-800 absolute top-[11.5rem] title-shadow leading-[69px] tracking-[-1.28px]"
        >
          VOCÊ JÁ PERCEBEU QUE:
        </Title>
      </div>
      {/* 
      <ul className="mb-12">
        {lista.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <TextPrimary className="ml-4 text-[22px] font-medium leading-[69px] tracking-[-0.48px]">
              <div className="absolute -left-[45px]">
                <svg
                  width="64"
                  height="35"
                  viewBox="0 0 64 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="64" height="35" fill="url(#pattern0_4_10)" />
                  <defs>
                    <pattern
                      id="pattern0_4_10"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_4_10"
                        transform="matrix(0.00980392 0 0 0.0179272 0 -0.00196078)"
                      />
                    </pattern>
                    <image
                      id="image0_4_10"
                      width="102"
                      height="56"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              {item}
            </TextPrimary>
          </li>
        ))}
      </ul> */}

      <Cards
        accentColor="bg-bluescale-800"
        text={textCard1}
        px="px-8"
        py="py-20"
        maxWidth="max-w-[1180px]"
        margin="ml-0"
        textAlign="text-center"
        shadowBox="right-shadow-box"
        gap="gap-5"
        visible="hidden"
      />
      <div className="relative">
        <Cards
          position="absolute"
          accentColor="bg-yellowscale-800"
          text={textCard2}
          maxWidth="max-w-[825px]"
          right="right-[-3rem] 3xl:-right-[-5rem]"
          top="top-[-3rem]"
          px="px-24"
          py="py-8"
          shadowBox="left-shadow-box"
          visible="hidden"
        />
      </div>

      <div className="relative">
        <div className="absolute -top-[45rem] -right-[17rem] 3xl:-right-[7rem] py-[26%] max-w-[582px] w-full hidden md:block">
          <Image src="/images/pictures/puzzle.png" alt="Puzzle" fill />
        </div>
      </div>

      {/* </div>
      </div> */}
    </Section>
  );
}
