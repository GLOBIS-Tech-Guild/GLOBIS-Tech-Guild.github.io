import { type MouseEvent } from "react";
import DevelopersGuildIcon from "../assets/DevelopersGuild.svg";

export function Footer() {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040712]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src={DevelopersGuildIcon} alt="GLOBIS Tech Guild" className="h-7 w-7" />
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 blur opacity-80"></div>
              </div>
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white/80 bg-clip-text text-lg font-semibold tracking-wide text-transparent">
                GLOBIS Tech Guild
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300/80">
              MBA × エンジニアのコミュニティ
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/90">ナビゲーション</h4>
            <ul className="space-y-3 text-sm text-slate-300/70">
              {[
                { href: "#about", label: "About" },
                { href: "#activities", label: "Activities" }
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="inline-block cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-cyan-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/90">活動内容</h4>
            <ul className="space-y-3 text-sm text-slate-300/70">
              {[
                "LTイベント",
                "パネルディスカッション",
                "ワークショップ",
                "プロダクト開発"
              ].map((activity) => (
                <li key={activity} className="transition-colors hover:text-cyan-200">
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/90">コミュニティ</h4>
            <p className="text-sm leading-relaxed text-slate-300/80">
              経営視点を持つエンジニアが集まり、共に成長するコミュニティです。
              次のプロダクト体験を共にデザインしましょう。
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2025 GLOBIS Tech Guild. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}