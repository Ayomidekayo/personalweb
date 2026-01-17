'use client';
const Footer = () => {
  return (
    <footer
      className="
        bg-slate-900 text-slate-400 
        text-center 
        py-4 sm:py-6 
        text-xs sm:text-sm md:text-base
        px-2
      "
    >
      <p className="max-w-md mx-auto leading-relaxed">
        © {new Date().getFullYear()} Kayode Ayomide Damilare · All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
