import friendsData from "@/data/friends.json";
import FriendCard from "./FriendCard";

const FriendSection = () => {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-10">
          Your Friends
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendSection;