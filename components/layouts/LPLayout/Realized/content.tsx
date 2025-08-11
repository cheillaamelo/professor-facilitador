import { TextPrimary, TextSecondary } from "@/components/elements/Texts";

interface TextCardItemProps {
  children: React.ReactNode;
}

export function TextCardItem({ children }: TextCardItemProps) {
  return (
    <TextPrimary className="ml-4 text-[24px] font-normal leading-[35px] tracking-[-0.48px] text-left relative text-white">
      <div className="absolute -left-[99px]">
        <svg
          width="79"
          height="43"
          viewBox="0 0 79 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="0.449219"
            width="78"
            height="43"
            fill="url(#pattern0_8_48)"
          />
          <defs>
            <pattern
              id="pattern0_8_48"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_8_48"
                transform="matrix(0.00332098 0 0 0.0060241 -0.0031279 0)"
              />
            </pattern>
            <image
              id="image0_8_48"
              width="303"
              height="166"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
      {children}
    </TextPrimary>
  );
}

export const lista = [
  "A turma segue apática, mesmo com todo o seu esforço.",
  "A energia da sala some e você se vê conduzindo tudo sozinho(a).",
  "Conflitos silenciosos travam o trabalho em grupo.",
  "Os alunos(as) não colaboram, porque não aprenderam a escutar de verdade.",
  "Os alunos(as) aceitam tudo calados(as), sem engajamento real.",
  "As metas sufocam o tempo de preparar aulas vivas e significativas.",
  "As salas estão lotadas, o suporte é mínimo e o reconhecimento quase nulo.",
  "E você, sobrecarregado(a), sem ferramentas emocionais e práticas para lidar com tudo isso.",
];

export const textCard1 = lista.map((item) => ({
  text: <TextCardItem>{item}</TextCardItem>,
}));

export const textCard2 = [
  {
    text: (
      <TextSecondary className="text-black text-[34px] leading-[53px] tracking-[-0.8px]">
        <strong>E talvez o mais duro:</strong> você sente que a tecnologia
        avançou, mas a qualidade das relações humanas ficou para trás
      </TextSecondary>
    ),
  },
];
