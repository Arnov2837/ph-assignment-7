import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2d4a3e] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="text-5xl font-black tracking-tighter">KeenKeeper</h2>
        
        <p className="mt-6 text-slate-300 max-w-xl text-sm md:text-base leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mt-10">
          <h3 className="text-lg font-bold uppercase tracking-widest text-slate-200 mb-6">Social Links</h3>
          <div className="flex gap-4">
            {[
              { icon: FaInstagram, href: "#" },
              { icon: FaFacebookF, href: "#" },
              { icon: FaTwitter, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-[#2d4a3e] hover:bg-slate-200 transition-all duration-300 shadow-lg"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-medium">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;