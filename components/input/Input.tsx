"use client";
import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
};

function Input({
  type = "text",
  name,
  value,
  placeholder = "Username",
  onChange,
}: InputProps) {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}

export default Input;
