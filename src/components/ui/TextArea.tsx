import React from "react";

interface TextAreaProps {
  label: string;
  id: string;
  name?: string;
  row?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  name,
  row = 5,
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  labelClassName = "",
  inputClassName = "",
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <textarea
        rows={row}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClassName}
      />
    </div>
  );
};

export default TextArea;
