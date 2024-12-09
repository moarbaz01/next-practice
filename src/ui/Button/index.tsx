interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  variant?: string;
  padding?: string;
  type: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "contained",
  padding,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        padding ? padding : "py-2 px-6"
      } text-lg font-bold border-2 border-teal-500 ${
        variant === "contained"
          ? "bg-teal-500  text-white"
          : "bg-white text-teal-500"
      } `}
    >
      {label}
    </button>
  );
};

export default Button;
