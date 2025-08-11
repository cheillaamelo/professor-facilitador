import { TextPrimary, TextSecondary } from "../Texts";
import Image from "next/image";

interface ICardListProps {
  text: { text: React.ReactNode }[];
  accentColor: string;
  position?: string;
  maxWidth?: string;
  right?: string;
  top?: string;
  px?: string;
  py?: string;
  margin?: string;
  textAlign?: string;
  shadowBox?: string;
  text2?: string;
  text3?: string;
  gap?: string;
  maxWidth2?: string;
  gap2?: string;
  imageSrc?: string;
  visible?: string;
  grid?: string;
}

export default function Cards({
  text,
  accentColor,
  position,
  maxWidth,
  right,
  top,
  px,
  py,
  margin,
  textAlign,
  shadowBox,
  text2,
  text3,
  gap,
  maxWidth2,
  gap2,
  imageSrc,
  visible,
  grid,
}: ICardListProps) {
  return (
    <div
      className={`flex flex-col gap-10 ${position} ${right} ${top} ${accentColor} ${margin} ${textAlign} rounded-[44px] ${py} ${px} ${maxWidth} ${shadowBox}`}
    >
      <div className={`${maxWidth2} ${gap2} flex flex-col`}>
        <div>
          <TextPrimary className="text-white text-2xl font-normal leading-[42px] tracking-[-0.48px] text-left">
            {text2}
          </TextPrimary>
        </div>
        <div>
          <TextSecondary className="text-white text-2xl font-bold leading-[42px] tracking-[-0.48px] text-left">
            {text3}
          </TextSecondary>
          <div className={`flex flex-col ${gap} ${grid}`}>
            {text.map((item, index) => (
              <div key={index}>{item.text}</div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${visible} absolute -top-[7rem] -right-[7rem] py-[33%] px-[27%] max-w-[582px] w-full`}
      >
        {imageSrc && <Image src={imageSrc} alt="" fill />}
      </div>
    </div>
  );
}
