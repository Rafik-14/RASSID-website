import { Layers, Globe, ArrowRight } from 'lucide-react';

export default function Navbar({ lang, setLang }) {
  const isRtl = lang === 'ar';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Brand Logo (Synex style: clean, confident, minimalist) */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 transition-transform hover:opacity-90"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-black text-[#7FE300]">
            <Layers className="size-4 text-[#7FE300]" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-zinc-950">
            rassid
          </span>
        </a>

        {/* Center Links (Synex style: uppercase tracked crisp text) */}
        <nav className="hidden items-center gap-8 md:flex font-mono text-[11px] font-bold tracking-widest text-zinc-500 uppercase">
          <a 
            href="#console-centrale" 
            className="transition-colors hover:text-black"
          >
            {isRtl ? 'لوحة التحكم' : 'GRAND LIVRE'}
          </a>
          <a 
            href="#pourquoi-rassid" 
            className="transition-colors hover:text-black"
          >
            {isRtl ? 'لماذا رصيد' : 'POURQUOI RASSID'}
          </a>
          <a 
            href="#pricing" 
            className="transition-colors hover:text-black"
          >
            {isRtl ? 'الأسعار' : 'TARIFS DZD'}
          </a>
        </nav>

        {/* Right Actions: Lang + Synex Black Pill Button */}
        <div className="flex items-center gap-3">
          
          {/* Language Switcher (Globe + Text) */}
          <button 
            onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-black transition-colors px-2 py-1"
          >
            <Globe className="size-3.5 text-zinc-500" />
            <span className="font-mono text-[11px]">{lang === 'fr' ? 'Français' : 'العربية'}</span>
          </button>

          {/* Synex-style Solid Black Pill Button */}
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 font-display text-xs font-bold text-white shadow-sm transition-all hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="grid size-4 place-items-center rounded-full bg-zinc-800 text-[#7FE300]">
              <ArrowRight className="size-2.5 rtl:rotate-180" />
            </span>
            <span>{isRtl ? 'تجربة مجانية' : 'Démarrer l\'essai'}</span>
          </a>

        </div>

      </div>
    </header>
  );
}
