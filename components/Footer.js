export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050908] py-6 text-[11px] text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Department of Geology, The Maharaja Sayajirao University of
          Baroda. All rights reserved.
        </p>
        <p className="text-[10px] text-slate-500">
          This is a conceptual alumni & department showcase layout – customise content, images and
          links as per official requirements.
        </p>
      </div>
    </footer>
  );
}
