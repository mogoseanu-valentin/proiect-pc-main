import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

import React from "react";

export default function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    
  );
}
