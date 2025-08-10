import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="bg-[#E2D609] text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
    >
      {title}
    </button>
  );
};

export default Button;
