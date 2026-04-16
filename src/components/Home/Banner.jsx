import { HiPlus } from "react-icons/hi";

const Banner = () => {
  return (
    <section className="bg-slate-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1]">
          Friends to keep <span className="text-[#2d4a3e]">close</span> in your life
        </h1>
        
        <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        <button className="mt-10 inline-flex items-center gap-2.5 bg-[#2d4a3e] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-emerald-950/10 hover:bg-[#1f362d] transition-all duration-300 hover:scale-105 active:scale-95 group">
          <HiPlus size={22} className="group-hover:rotate-90 transition-transform duration-300" />
          Add a Friend
        </button>
      </div>
    </section>
  );
};

export default Banner;