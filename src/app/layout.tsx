import MobileBottomNav from "@/components/Header/MobileBottomNav";
import PublicHeader from "@/components/Header/PublicHeader";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { TooltipProvider } from "@/components/shadcnui/tooltip";
import { notoSansHeading, nunitoSans } from "@/lib/fonts";
import { RootLayoutProps } from "@/lib/type";
import { cn } from "@/lib/utils";
import "./globals.css";

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        "font-sans",
        nunitoSans.variable,
        notoSansHeading.variable,
      )}
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}>
          <PublicHeader />
          <TooltipProvider>
            <main className="mx-auto max-w-7xl pb-16 lg:pb-0">{children}</main>
          </TooltipProvider>
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
