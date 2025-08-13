import { Section } from "@/components/elements/Section";
import Image from "next/image";
import { Title, TextPrimary } from "@/components/elements/Texts";
import { ButtonPrimary } from "@/components/elements/Button";

export default function Hero() {
  return (
    <Section className="pt-12 lg:pt-20 bg-purplescale-800">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5">
        <div className="flex flex-col justify-center lg:mb-20 text-left">
          <Title className="mb-4 text-[32px] md:text-[40px] lg:text-[48px] font-medium text-yellowscale-800 tracking-[-0.96px] leading-[42px] lg:leading-[57px]">
            <div>Transforme suas</div>
            <div>aulas em experiências</div>
            <div>educacionais potentes</div>
          </Title>

          <TextPrimary className="text-grayscale-100 text-[18px] lg:text-2xl font-light leading-[150%]">
            <div className="mb-8">
              O Curso Ao Vivo “O Despertador do Professor Facilitador” é para
              educadores professores, coordenadores e formadores que que sabem
              que a próxima etapa da sua jornada profissional não está apenas em
              acumular mais conhecimentos e técnicas, mas em amadurecer sua
              postura, presença e escuta como facilitador(a) de grupos.
            </div>
          </TextPrimary>
          <div className="lg:max-w-[480px]">
            <ButtonPrimary
              href="https://www.sympla.com.br/preview-online/47c819aaeef3f7432df1f669410afd24"
              target="_blank"
            >
              <p className="chantal uppercase font-medium text-[18px] lg:text-[24px]">
                Quero transformar minha prática
              </p>
            </ButtonPrimary>
          </div>
        </div>

        <div className="relative flex items-end flex-col justify-end">
          <div className="relative py-[55%] md:py-[34%] lg:py-[59%] w-full">
            <Image
              fill
              src="https://facilitacao.com.br/wp-content/uploads/2025/08/foto-hero.png"
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
