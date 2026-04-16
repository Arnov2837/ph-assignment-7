"use client";

import { useState, useEffect } from "react";
import { HiOutlinePhone, HiOutlineChatAlt2, HiOutlineVideoCamera, HiChevronDown, HiOutlineTrash } from "react-icons/hi";
import toast from "react-hot-toast";

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    setTimelineData(savedTimeline);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "Call": return HiOutlinePhone;
      case "Text": return HiOutlineChatAlt2;
      case "Video": return HiOutlineVideoCamera;
      default: return HiOutlinePhone;
    }
  };

  const handleDelete = (id) => {
    const updatedTimeline = timelineData.filter(item => item.id !== id);
    setTimelineData(updatedTimeline);
    localStorage.setItem("timeline", JSON.stringify(updatedTimeline));
    toast.error("Entry deleted from timeline");
  };

  const filteredData = filter === "All" 
    ? timelineData 
    : timelineData.filter(item => item.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-4xl font-black text-slate-900 tracking-tight">Timeline</h1>

      <div className="mt-8 relative max-w-[200px]">
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="w-full appearance-none bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-slate-600 font-medium focus:outline-none focus:ring-2 focus:ring-[#2d4a3e]/20"
        >
          <option value="All">All interactions</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
        <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
      </div>

      <div className="mt-10 space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            const Icon = getIcon(item.type);
            return (
              <div key={item.id} className="group flex items-center justify-between bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 group-hover:bg-[#2d4a3e] group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {item.type} with {item.friend}
                    </h3>
                    <p className="text-sm font-semibold text-slate-400 mt-0.5 uppercase tracking-wide">
                      {item.date}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => handleDelete(item.id)}
                  className="p-3 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all cursor-pointer"
                  title="Delete Entry"
                >
                  <HiOutlineTrash size={22} />
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-slate-400 font-medium text-center py-10">No interactions found.</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;