import Link from "next/link";
import { HiOutlineClock } from "react-icons/hi";
import { clsx } from "clsx";

const FriendCard = ({ friend }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-rose-100 text-rose-700";
      case "almost due":
        return "bg-amber-100 text-amber-700";
      case "on-track":
        return "bg-emerald-100 text-emerald-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm shadow-slate-950/5 flex flex-col items-center text-center transition-all duration-300 hover:border-slate-200 hover:shadow-md hover:-translate-y-1">
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="w-24 h-24 rounded-full object-cover shadow-inner"
        />
        
        <h3 className="mt-5 text-xl font-bold text-slate-900">
          {friend.name}
        </h3>
        
        <div className="mt-2 flex items-center gap-1.5 text-slate-500 text-sm">
          <HiOutlineClock size={16} />
          <span>{friend.days_since_contact} days ago</span>
        </div>
        
        <div className="mt-4 flex gap-2 flex-wrap justify-center">
          {friend.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-[#2d4a3e]/10 text-[#2d4a3e] rounded-full text-xs font-medium capitalize"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`mt-5 w-full text-center px-4 py-1.5 rounded-full text-sm font-semibold capitalize ${getStatusColor(friend.status)}`}>
          {friend.status}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;