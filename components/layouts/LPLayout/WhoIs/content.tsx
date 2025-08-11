import { TextSecondary } from "@/components/elements/Texts";

interface TextCardItemProps {
  children: React.ReactNode;
}

export function TextCardItem({ children }: TextCardItemProps) {
  return (
    <TextSecondary className="font-light text-left text-2xl leading-[40px] tracking-[-0.48px] text-white">
      • {children}
    </TextSecondary>
  );
}

const items = [
  "Design da Facilitação de Grupos",
  "Design Thinking",
  "Transformação Digital (Silicon Valley)",
  "Inovação Exponencial (Singularity University)",
  "Certificado internacional em metodologias ágeis (SCRUM.org)",
];

export const textCard = items.map((item) => ({
  text: <TextCardItem>{item}</TextCardItem>,
}));
