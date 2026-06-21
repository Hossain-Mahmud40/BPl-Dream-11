import dollarImg from "../../assets/dollar_1.png";
import logo from "../../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="container-pad navbar px-0">
        <div className="flex-1">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="BPL Dream XI" className="h-11 w-auto" />
            <span className="hidden text-xl font-black text-slate-900 sm:inline">
              BPL Dream XI
            </span>
          </a>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          <a href="#players" className="hover:text-slate-950">
            Players
          </a>
          <a href="#selected" className="hover:text-slate-950">
            My Squad
          </a>
        </nav>
        <div className="ml-4 flex-none">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 font-bold text-slate-900 shadow-sm">
            <span>{coin.toLocaleString()} Coins</span>
            <img src={dollarImg} alt="" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
