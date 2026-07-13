import Image from "next/image";
import Link from "next/link";
import HeaderMenuButton from "../Buttons/HeaderMenuButton";
import NavigateButton from "../Buttons/NavigateButton";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";

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
              className="h-8 w-auto"
            />
          </Link>

          <ThemeToggleButton className="flex lg:hidden" />
        </nav>

        {/* navigation routes  */}
        <nav
          className="hidden lg:flex lg:items-center lg:gap-3"
          aria-label="primary-navigation">
          <Link
            href="/wallpapers"
            className="hover:text-muted-foreground">
            Wallpapers
          </Link>

          <Link
            href="/categories"
            className="hover:text-muted-foreground">
            categories
          </Link>

          <NavigateButton
            buttonVariant="ghost"
            navigationLink="/login">
            Login
          </NavigateButton>

          <NavigateButton
            buttonVariant="default"
            navigationLink="/register">
            Register
          </NavigateButton>

          <ThemeToggleButton className="hidden lg:flex" />
        </nav>

        {/* mobile menu toggle  */}
        <div className="flex items-center lg:hidden">
          <HeaderMenuButton />
        </div>
      </section>
    </header>
  );
};

export default PublicHeader;
