import { useState } from "react";
const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburegerline = `h-1 w-6 my-0.5 rounded-full bg-white transition ease`;
  return (
    <button
      className="h-8 w-8 flex flex-col border-2 border-white rounded-md justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`${hamburegerline}${
          isOpen
            ? "transform duration-300 rotate-45 translate-y-2 group-hover:opacity-100"
            : "group-hover:opacity-100"
        }`}
      ></span>
      <span
        className={`${hamburegerline} ${
          isOpen ? "opacity-0" : "group-hover:opacity-100"
        }`}
      ></span>
      <span
        className={`${hamburegerline}${
          isOpen
            ? "transform duration-300 -rotate-45 -translate-y-2"
            : "opacity-50 group-hover:opacity-100"
        }`}
      ></span>
    </button>
  );
};

export default Button;
