import { TextSecondary } from "@/components/elements/Texts";
import Image from "next/image";
import { Section } from "@/components/elements/Section";
import Link from "next/link";

export const Header = () => {
  return (
    <Section className="bg-bluescale-800 py-2 lg:py-4">
      <div className="flex justify-between items-center py-4">
        <div className="relative w-[165px] md:w-[320px] lg:w-[550px] h-[120px] mx-auto md:mx-0">
          <Image
            fill
            src="/images/logos/logo.svg"
            alt="Professor Facilitador"
            style={{ objectFit: "contain" }}
          />
        </div>
        <Link href="#">
          <TextSecondary className="bg-yellowscale-800 text-purplescale-800 font-black text-[20px] lg:text-[29px] rounded-xl py-2 px-4 lg:px-6 lg:py-4">
            Blog
          </TextSecondary>
        </Link>
      </div>
    </Section>
  );
};
