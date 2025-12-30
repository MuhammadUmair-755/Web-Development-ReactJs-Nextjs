import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import HeaderForSmallScreen from "./HeaderForSmallScreen";
import HeaderToggler from "./HeaderToggler";

function Header() {
  return (
    <header className="border-b border-primary-900 px-4 md:px-8 py-5  md:mx-10">
      <div className="flex justify-between items-center">
        <Logo />
        <HeaderToggler>
          <Navigation />
        </HeaderToggler>
      </div>
    </header>
  );
}

export default Header;
