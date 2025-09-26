import React from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface InputProps {
  label: string;
  id: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  options?: RadioOption[]; // For radio group'

  // Add these for "Other" support
  showOtherInput?: boolean;
  otherValue?: string;
  onOtherChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  labelClassName = "",
  inputClassName = "",
  options,
  showOtherInput = false,
  otherValue = "",
  onOtherChange,
}) => {
  if (type === "radio" && options) {
    return (
      <div className={className}>
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        <div className="flex border-s-2 border-[#2B1F09] pl-4 gap-4">
          {options.map((option) => (
            <div className="flex justify-center items-center gap-4">
              <label htmlFor={`${id}-${option.value}`}>{option.label}</label>
              <input
                type="radio"
                id={`${id}-${option.value}`}
                name={name || id}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                required={required}
                className={inputClassName}
              />
              {/* Show text input next to "Other" radio */}
              {option.value === "other" &&
                showOtherInput &&
                value === "other" && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    value={otherValue}
                    onChange={onOtherChange}
                    className={inputClassName + " ml-2"}
                  />
                )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
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

export default Input;
