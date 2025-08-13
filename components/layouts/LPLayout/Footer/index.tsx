import { Section } from "@/components/elements/Section";
import { TextSecondary } from "@/components/elements/Texts";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <Section className="bg-bluescale-800 py-0 md:py-10 lg:py-25">
      <div className="flex justify-between items-center py-4">
        <div className="flex flex-col">
          <Link href="/">
            <TextSecondary className="text-white font-black text-[10px] md:text-2xl lg:text-[29px]">
              facilitacao.com.br
            </TextSecondary>
          </Link>
          <TextSecondary className="text-white font-black text-[10px] md:text-2xl lg:text-[29px]">
            Todos os direitos reservados
          </TextSecondary>
        </div>
        <div className="relative w-[165px] md:w-[320px] lg:w-[550px] h-[120px] mx-auto md:mx-0">
          <Image
            fill
            src="https://facilitacao.com.br/blog/wp-content/uploads/2025/08/logo.png"
            alt="Professor Facilitador"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </Section>
  );
};
