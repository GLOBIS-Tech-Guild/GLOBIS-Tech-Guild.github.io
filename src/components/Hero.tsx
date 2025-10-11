import { useState, useEffect, useRef } from 'react';
import heroGif from '../assets/globis_tech_guild.gif';
import heroPng from '../assets/globis_tech_guild.png';

export default function Hero() {
  const [showGif, setShowGif] = useState(true);
  const [pngLoaded, setPngLoaded] = useState(false);
  const pngRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // PNG画像を事前に読み込み
    const img = new Image();
    img.src = heroPng;
    img.onload = () => {
      setPngLoaded(true);
    };

    // 3秒後にGIFからPNG画像に切り替え
    const timer = setTimeout(() => {
      if (pngLoaded) {
        setShowGif(false);
      }
    }, 3000); // 3秒後に切り替え（GIFの長さに応じて調整）

    return () => clearTimeout(timer);
  }, [pngLoaded]);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen">
      {/* PNG画像（事前読み込み・初期は透明） */}
      <img
        ref={pngRef}
        src={heroPng}
        alt="GLOBIS Tech Guild"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showGif ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: showGif ? 1 : 2 }}
      />

      {/* GIFアニメーション（上に重ねて表示） */}
      <img
        src={`${heroGif}?t=${Date.now()}`}
        alt="GLOBIS Tech Guild"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showGif ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: showGif ? 2 : 1 }}
      />
    </section>
  );
}