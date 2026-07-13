import Image from "next/image";
import Link from "next/link";
import HeaderMenuButton from "../Buttons/HeaderMenuButton";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import { buttonVariants } from "../shadcnui/button";

const PublicHeader = () => {
  return (
    <header
      className="sticky top-0 z-50 border-b shadow backdrop-blur-lg"
      aria-label="PixSlash-Web-header">
      <section className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* logo section + theme toggle button */}
        <nav className="flex items-center gap-2">
          <Link
            href={"/"}
            aria-label="PixSlash-Web-Logo">
            <Image
              src="/logo.png"
              height={100}
              width={100}
              alt="PixSlash-Logo"
              priority
              className="h-8 w-full"
            />
          </Link>

          <ThemeToggleButton className="flex lg:hidden" />
        </nav>

        {/* navigation routes  */}
        <nav
          className="hidden lg:flex lg:items-center lg:gap-3"
          aria-label="wallpapers-route-link">
          <Link
            href="/wallpapers"
            className="hover:text-muted-foreground">
            Wallpapers
          </Link>

          <Link
            href="/categories"
            aria-label="categories-route-link"
            className="hover:text-muted-foreground">
            categories
          </Link>

          <Link
            href="/login"
            aria-label="login-route-link"
            className={buttonVariants({ variant: "ghost", className: "px-3" })}>
            Login
          </Link>

          <Link
            href="/register"
            aria-label="register-route-link"
            className={buttonVariants({ variant: "default" })}>
            Register
          </Link>

          <ThemeToggleButton className="hidden lg:flex" />
        </nav>

        {/* mobile menu toggle  */}
        <aside className="block lg:hidden">
          <HeaderMenuButton />
        </aside>
      </section>
    </header>
  );
};

export default PublicHeader;
