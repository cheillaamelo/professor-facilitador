import { TextPrimary, TextSecondary } from "../Texts";

interface ICardListProps {
  accentColors?: string[];
  items: {
    icon?: React.ReactNode;
    text: React.ReactNode;
  }[];
  lgGrid: string;
  fontSize?: string;
  leading?: string;
  tracking?: string;
  textComponent?: "primary" | "secondary"; // define qual tipo usar
  py?: string;
  px?: string;
  gap?: string;
}

export default function CardsGrid({
  accentColors = ["bg-white text-black"],
  items,
  lgGrid,
  fontSize,
  leading,
  tracking,
  textComponent = "primary",
  px,
  py,
  gap,
}: ICardListProps) {
  const colsMatch = lgGrid.match(/lg:grid-cols-(\d)/);
  const columns = colsMatch ? parseInt(colsMatch[1], 10) : 3;

  // Mapeia string para componente
  const TextComponent =
    textComponent === "primary" ? TextPrimary : TextSecondary;

  return (
    <div
      className={`mb-16 grid grid-cols-1 sm:grid-cols-2 ${lgGrid} ${gap} w-full`}
    >
      {items.map((item, index) => {
        let colorClass: string;

        if (accentColors.length === 1) {
          colorClass = accentColors[0];
        } else if (columns === 2) {
          const row = Math.floor(index / 2);
          const col = index % 2;
          colorClass = accentColors[(row + col) % accentColors.length];
        } else {
          colorClass = accentColors[index % accentColors.length];
        }

        return (
          <div
            key={index}
            className={`left-shadow-box rounded-[44px] shadow ${px} ${py} justify-center flex flex-col items-center text-center ${colorClass}`}
          >
            {item.icon && <div className="mb-4">{item.icon}</div>}
            <TextComponent
              className={`text-[${fontSize || "28px"}] leading-[${
                leading || "40px"
              }] tracking-[-${tracking || "-0.64px"}]`}
            >
              {item.text}
            </TextComponent>
          </div>
        );
      })}
    </div>
  );
}
