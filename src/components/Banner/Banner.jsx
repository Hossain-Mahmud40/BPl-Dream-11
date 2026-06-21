import bannerMain from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";

const Banner = ({ onClaimCredit }) => {
  return (
    <section className="container-pad pt-8">
      <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 lg:px-16">
        <img
          src={bgShadow}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-300/40 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              Fantasy cricket squad builder
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Assemble your ultimate BPL Dream XI
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Balance your budget, compare player roles, and build a match-ready
              lineup from proven cricket stars.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onClaimCredit}
                className="btn border-0 bg-[#E7FE29] px-7 text-slate-950 hover:bg-lime-300"
              >
                Claim 1000 Free Coins
              </button>
              <a
                href="#players"
                className="btn border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Browse Players
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={bannerMain}
              alt="Cricket player illustration"
              className="w-full max-w-[360px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
