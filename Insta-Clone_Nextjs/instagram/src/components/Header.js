import { HiOutlineHeart } from "react-icons/hi";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggler";
import Search from "./ui/Search";

function Header() {
  return (
    <div className="shadow-sm top-0 z-50 sticky bg-primary px-3 flex items-center justify-between md:hidden">
      <Logo />
      <div className="flex gap-1">        
        <Search/>
        <ThemeToggle/>
        <div>
          {" "}
          <HiOutlineHeart className="h-8 w-8 text-app-text" />
        </div>
      </div>
    </div>
  );
}

export default Header;
