const SummaryCards = () => {
  const stats = [
    { label: "Total Friends", value: "10" },
    { label: "On Track", value: "3" },
    { label: "Need Attention", value: "6" },
    { label: "Interactions This Month", value: "12" },
  ];

  return (
    <section className="pb-20 -mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-950/5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-slate-200 hover:shadow-md hover:-translate-y-1"
            >
              <div className="text-5xl font-extrabold tracking-tight text-[#2d4a3e]">
                {stat.value}
              </div>
              <div className="mt-3 text-sm font-medium text-slate-500 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummaryCards;