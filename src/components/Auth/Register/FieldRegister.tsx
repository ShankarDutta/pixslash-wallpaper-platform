"use client";

import { Field, FieldError, FieldLabel } from "@/components/shadcnui/field";
import { Input } from "@/components/shadcnui/input";
import { RegisterSchemaType } from "@/lib/type";
import { Control, Controller, Path } from "react-hook-form";

type RegisterFieldProps = {
  control: Control<RegisterSchemaType>;
  name: Path<RegisterSchemaType>;
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  autoComplete: string;
};

const FieldRegister = ({
  control,
  name,
  label,
  type,
  placeholder,
  autoComplete,
}: RegisterFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>

          <Input
            {...field}
            id={field.name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={fieldState.invalid}
            aria-describedby={
              fieldState.invalid ? `${field.name}-error` : undefined
            }
          />

          {fieldState.invalid && (
            <FieldError
              id={`${field.name}-error`}
              errors={[fieldState.error]}
            />
          )}
        </Field>
      )}
    />
  );
};

export default FieldRegister;
