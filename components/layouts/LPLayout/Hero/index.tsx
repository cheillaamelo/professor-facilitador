import { Section } from "@/components/elements/Section";
import Image from "next/image";
import { Title, TextPrimary } from "@/components/elements/Texts";
import { ButtonPrimary } from "@/components/elements/Button";

export default function Hero() {
  return (
    <Section className="pt-12 lg:pt-20 pb-8 lg:pb-0 bg-purplescale-800">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5">
        <div className="flex flex-col justify-center lg:mb-20 text-center lg:text-left">
          <Title className="mb-4 text-[40px] lg:text-[48px] font-medium text-yellowscale-800 tracking-[-0.96px] leading-[45px] lg:leading-[57px]">
            <div>Transforme suas</div>
            <div>aulas em experiências</div>
            <div>educacionais potentes</div>
          </Title>

          <TextPrimary className="text-grayscale-100 text-xl lg:text-2xl font-light leading-[150%]">
            <div className="mb-8">
              O Curso Ao Vivo “O Despertador do Professor Facilitador” é para
              educadores professores, coordenadores e formadores que que sabem
              que a próxima etapa da sua jornada profissional não está em
              acumular mais técnicas, mas em amadurecer sua postura, presença e
              escuta como facilitador(a) de grupos.
            </div>
          </TextPrimary>
          <div className="lg:max-w-[480px]">
            <ButtonPrimary href="#">
              <p className="chantal uppercase font-medium text-xl lg:text-[24px]">
                Quero transformar minha prática
              </p>
            </ButtonPrimary>
          </div>
        </div>

        <div className="relative flex items-end flex-col justify-end">
          <div className="hidden lg:block relative py-[59%] w-full">
            <Image
              fill
              src="/images/pictures/foto-hero.png"
              alt="Professor Facilitador"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
