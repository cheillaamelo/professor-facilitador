import { Title } from "@/components/elements/Texts";

interface TextCardItemProps {
  children: React.ReactNode;
}

export function TextCardItem({ children }: TextCardItemProps) {
  return (
    <Title
      as="h5"
      className="text-[32px] leading-[46px] tracking-[-0.64px] text-white"
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
