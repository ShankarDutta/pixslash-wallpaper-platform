"use client";

import { RegisterSchemaType } from "@/lib/type";
import { registerSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../shadcnui/button";
import { Spinner } from "../../shadcnui/spinner";
import FieldRegister from "./FieldRegister";

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },

    mode: "onSubmit",
  });

  const submitRegisterData = (srData: RegisterSchemaType) => {
    // TODO: replace with actual registration API call
    console.log(srData);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitRegisterData)}
      className="space-y-3"
      noValidate>
      {/* user full name field  */}
      <FieldRegister
        control={control}
        name="name"
        label="Name"
        type="text"
        placeholder="Full name"
        autoComplete="name"
      />

      {/* user email address field  */}
      <FieldRegister
        control={control}
        name="emailAddress"
        label="Email Address"
        type="email"
        placeholder="Email address"
        autoComplete="email"
      />

      {/* user password field  */}
      <FieldRegister
        control={control}
        name="password"
        label="Password"
        type="password"
        placeholder="Password"
        autoComplete="off"
      />

      {/* user confirm password field  */}
      <FieldRegister
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
        autoComplete="off"
      />

      {/* submit button  */}
      <Button
        type="submit"
        className="w-full py-4"
        disabled={isSubmitting}>
        {isSubmitting ?
          <Spinner />
        : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
