import RegisterForm from "@/components/Auth/Register/RegisterForm";
import NavigateButton from "@/components/Buttons/NavigateButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | PixSlash",
  description:
    "Register in to your PixSlash account to explore, upload, organize, and download high-quality wallpapers for desktop and mobile devices.",
};

const page = () => {
  return (
    <section className="grid place-items-center px-6 pt-2 md:pt-3 lg:h-[90dvh] lg:pt-12">
      <Card className="w-full gap-2 py-4 md:w-100">
        <CardHeader>
          {/* heading  */}
          <CardTitle className="text-xl md:text-2xl">
            Create an account
          </CardTitle>

          {/* pargaraph  */}
          <CardDescription className="text-[16px]">
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* form component */}
          <RegisterForm />
        </CardContent>

        <CardFooter>
          {/* additonal link  */}
          <CardDescription className="mx-auto">
            Already have an account?
            <NavigateButton
              navigationLink={"/login"}
              className="h-0"
              buttonVariant="link">
              Login
            </NavigateButton>
          </CardDescription>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
