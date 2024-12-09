interface InputProps {
  placeholder: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}
const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  onChange,
  type = "text",
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      className="w-full h-12 py-2 border-2 border-black px-4 rounded-md"
      placeholder={placeholder}
    />
  );
};

export default Input;
