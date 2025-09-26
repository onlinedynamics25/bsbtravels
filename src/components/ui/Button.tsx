import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string; // optional for navigation
  id?: string;
  name?: string;
  title?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  id,
  name,
  title = "",
  type = "button",
  onClick,
  disabled = false,
  className = "",
  target = "",
  rel = "",
  children,
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`inline-block ${
          disabled ? "pointer-events-none opacity-50" : ""
        } ${className}`}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      id={id}
      name={name}
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
