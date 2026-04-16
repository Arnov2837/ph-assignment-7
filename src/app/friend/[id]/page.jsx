"use client";

import { useParams } from "next/navigation";
import friendsData from "@/data/friends.json";
import { HiOutlinePhone, HiOutlineChatAlt2, HiOutlineVideoCamera, HiOutlineBell, HiOutlineArchive, HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend) return <div className="min-h-screen flex items-center justify-center font-bold">Friend not found!</div>;

const handleCheckIn = (type) => {
  const newEntry = {
    id: Date.now(),
    type: type,
    friend: friend.name,
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  };

  const existingTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
  const updatedTimeline = [newEntry, ...existingTimeline];
  localStorage.setItem("timeline", JSON.stringify(updatedTimeline));

  toast.success(`${type} with ${friend.name} added to timeline!`);
};

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue": return "bg-rose-500 text-white";
      case "almost due": return "bg-amber-500 text-white";
      case "on-track": return "bg-emerald-500 text-white";
      default: return "bg-slate-500 text-white";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full object-cover border-4 border-slate-50 shadow-lg" />
            <h1 className="mt-6 text-2xl font-black text-slate-900">{friend.name}</h1>
            <div className={`mt-3 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(friend.status)}`}>
              {friend.status}
            </div>
            <div className="mt-2 px-4 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
              {friend.tags[0]}
            </div>
            <p className="mt-6 text-slate-500 italic text-sm leading-relaxed font-medium">"{friend.bio}"</p>
            <p className="mt-4 text-slate-400 text-xs uppercase font-bold tracking-widest">Preferred: {friend.email}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-white py-4 rounded-2xl border border-slate-100 font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              <HiOutlineBell size={20} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white py-4 rounded-2xl border border-slate-100 font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              <HiOutlineArchive size={20} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white py-4 rounded-2xl border border-rose-50 font-bold text-rose-500 hover:bg-rose-50 transition-all shadow-sm">
              <HiOutlineTrash size={20} /> Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Days Since Contact", value: friend.days_since_contact },
              { label: "Goal (Days)", value: friend.goal },
              { label: "Next Due", value: friend.next_due_date }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                <div className="text-4xl font-black text-[#2d4a3e]">{stat.value}</div>
                <div className="mt-2 text-sm font-bold text-slate-400 uppercase tracking-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-800">Relationship Goal</h3>
              <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                <HiOutlinePencilAlt size={20} className="text-slate-600" />
              </button>
            </div>
            <p className="mt-4 text-slate-500 font-medium">Connect every <span className="text-slate-900 font-black text-lg">{friend.goal} days</span></p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black text-slate-800 mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-6">
              <button onClick={() => handleCheckIn("Call")} className="flex flex-col items-center justify-center gap-3 py-8 bg-slate-50 rounded-2xl hover:bg-[#2d4a3e] hover:text-white transition-all group">
                <HiOutlinePhone size={32} className="text-slate-700 group-hover:text-white" />
                <span className="font-bold uppercase text-xs tracking-widest">Call</span>
              </button>
              <button onClick={() => handleCheckIn("Text")} className="flex flex-col items-center justify-center gap-3 py-8 bg-slate-50 rounded-2xl hover:bg-[#2d4a3e] hover:text-white transition-all group">
                <HiOutlineChatAlt2 size={32} className="text-slate-700 group-hover:text-white" />
                <span className="font-bold uppercase text-xs tracking-widest">Text</span>
              </button>
              <button onClick={() => handleCheckIn("Video")} className="flex flex-col items-center justify-center gap-3 py-8 bg-slate-50 rounded-2xl hover:bg-[#2d4a3e] hover:text-white transition-all group">
                <HiOutlineVideoCamera size={32} className="text-slate-700 group-hover:text-white" />
                <span className="font-bold uppercase text-xs tracking-widest">Video</span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FriendDetails;