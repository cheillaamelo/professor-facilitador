import { Title } from "@/components/elements/Texts";

interface TextCardItemProps {
  children: React.ReactNode;
}

export function TextCardItem({ children }: TextCardItemProps) {
  return (
    <Title
      as="h5"
      className="text-[18px] md:text-[25px] lg:text-[32px] leading-[24px] md:leading-[46px] tracking-[-0.64px] text-white text-left md:text-center"
    >
      • {children}
    </Title>
  );
}

const items = [
  "Educação participativa",
  "Estratégias de facilitação e mediação de grupos",
  "Ferramentas práticas para o cotidiano educacional",
  "Casos reais e reflexões de sala de aula",
];

export const textCard = items.map((item) => ({
  text: <TextCardItem>{item}</TextCardItem>,
}));
