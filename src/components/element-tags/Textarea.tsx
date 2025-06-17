import React from "react";

interface input {
  value: string | number;
  title: string;
  id: string;
  placeholder: string;
  classNameLabel?: string;
  classNameTitle?: string;
  classNameInput?: string;
  classNameError?: string;
  required: boolean;
  // type?: string;
  error?: { [key: string]: string | undefined };
  onChange: (value: string) => void;
}

export default function Textarea({
  title,
  error,
  id,
  // type = "text",
  value,
  required,
  placeholder,
  classNameLabel,
  classNameTitle,
  classNameInput,
  classNameError,
  onChange,
}: input) {
  return (
    <label htmlFor={id} className={`input ${classNameLabel || ""}`}>
      <h3 className={` ${classNameTitle || ""}`}>
        {title} <span>{required ? "*" : ""}</span>
      </h3>
      <textarea
        className={`${classNameInput || ""}`}
        // type={type}
        placeholder={placeholder}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <p
        style={{ opacity: error?.[id] ? 1 : 1 }}
        className={`${classNameError || ""}`}
      ></p>
    </label>
  );
}
