import { TextSecondary } from "@/components/elements/Texts";

interface TextCardItemProps {
  children: React.ReactNode;
}

export function TextCardItem({ children }: TextCardItemProps) {
  return (
    <TextSecondary className="font-light text-left text-[18px] md:text-2xl leading-[30px] md:leading-[40px] tracking-[-0.48px] text-white">
      • {children}
    </TextSecondary>
  );
}

const items = [
  "Design da Facilitação de Grupos",
  "Design Thinking",
  "Inovação Exponencial (Singularity University - EUA)  ",
  "Transformação Digital (Silicon Valley Innovation Center -USA) ",
  "Certificado internacional em metodologias ágeis (SCRUM.org)",
];

export const textCard = items.map((item) => ({
  text: <TextCardItem>{item}</TextCardItem>,
}));
