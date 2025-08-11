import { ButtonBase, IButtonBase } from "./ButtonBase";

export const ButtonPrimary = ({
  children,
  onClick,
  href,
  type,
  id,
  target,
}: Omit<IButtonBase, "className">) => {
  return (
    <ButtonBase
      className="bg-yellowscale-800 right-shadow-box text-black text-sm h-[76px] flex justify-center w-full rounded-[13px] items-center right-shadow-box"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
      target={target}
    >
      {children}
    </ButtonBase>
  );
};
