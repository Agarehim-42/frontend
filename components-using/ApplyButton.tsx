import React from "react";
import classNames from "classnames";

interface ApplyButtonProps {
  text: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  type?: "button" | "submit" | "reset";
}

const ApplyButton: React.FC<ApplyButtonProps> = ({
  text,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus:outline-none";

  const variants = {
    primary: "bg-[#2563eb] text-white hover:bg-[#1e40af] shadow-md",
    outline:
      "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 dark:text-gray-200 dark:border-gray-600 dark:bg-transparent dark:hover:bg-gray-800",
    ghost:
      "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(baseClasses, variants[variant], "buttonpro", className)}
    >
      <span>{text}</span>
    </button>
  );
};

export default ApplyButton;
