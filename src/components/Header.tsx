import { Button } from "./ui/button";
import { Menu, Sparkles, X } from "lucide-react";
import { useState, type MouseEvent } from "react";
import DevelopersGuildIcon from "../assets/DevelopersGuild.svg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 60; // ヘッダーの高さ分のオフセット
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setMobileMenuOpen(false); // モバイルメニューを閉じる
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05060f]/80 backdrop-blur-xl">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a className="flex items-center space-x-3" href="/">
              <div className="relative">
                <img src={DevelopersGuildIcon} alt="GLOBIS Tech Guild" className="h-8 w-8" />
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-purple-500/40 blur opacity-80"></div>
              </div>
              <span className="font-semibold text-lg tracking-wide bg-gradient-to-r from-white via-cyan-100 to-white/80 bg-clip-text text-transparent">
                GLOBIS Tech Guild
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "#about", label: "About" },
              { href: "#activities", label: "Activities" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              <span>Next meetup in planning</span>
            </div>
            <Button
              className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_40px_-15px_rgba(56,189,248,0.8)] hover:from-cyan-300 hover:via-sky-400 hover:to-blue-400"
              onClick={() => scrollToSection('#activities')}
            >
              Join the Guild
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-white/10 bg-[#05060f]/95 px-2 pt-2 pb-4 backdrop-blur-xl">
              {[
                { href: "#about", label: "About" },
                { href: "#activities", label: "Activities" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-900"
                onClick={() => {
                  scrollToSection('#activities');
                  setMobileMenuOpen(false);
                }}
              >
                Join the Guild
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}