import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Icons from "./ui/Icons";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="lg:hidden">
        {!showMenu && (
          <div className="flex justify-between items-center w-full p-4">
            <div className="font-mono text-xl">
              <Link to="/">
                <span className="text-blue-500">MULTI</span>-TOOL
              </Link>
            </div>
            <div
              className="lg:hidden hover:cursor-pointer"
              onClick={() => setShowMenu(true)}
            >
              <Icons
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                width="w-10"
                id="hamburgerIcon"
              />
            </div>
          </div>
        )}
        {showMenu && <MobileNav onClick={setShowMenu} />}
      </div>
      <div className="hidden lg:block mx-auto">
        <div className="flex justify-between items-center w-full p-4">
          <div className="font-mono text-xl md:text-4xl hover:text-blue-500 active:text-blue-700 tracking-wider">
            <Link to="/">
              <span className="text-blue-500">MULTI</span>
              <span>-TOOL</span>
            </Link>
          </div>
          <div>
            <MobileNav onClick={() => {}} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
