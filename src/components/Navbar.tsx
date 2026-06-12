import Link from "next/link";
import Menucom from "./Menu";

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 flex items-center justify-between border-b-2 border-b-red-500 uppercasse">
      {/* Logo */}
      <div>
        <Link href=" ">Massimo</Link>
      </div>
      {/* Menu */}
      <div>
        <Menucom />
      </div>
    </div>
  );
};
export default Navbar;
