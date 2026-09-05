// logo.png — 1254x1254 shaffof kanvas, belgi esa uning o'rtasida turadi va
// atrofida ancha bo'sh joy qoladi. Quyidagi qiymatlar shu fayldagi belgining
// haqiqiy chegaralari (piksel bo'yicha o'lchangan): kanvasni shu ramkaga
// qirqamiz, shunda belgi to'liq va bo'sh chekkalarsiz ko'rinadi.
// Logotip fayli almashtirilsa, bu qiymatlarni qaytadan o'lchash kerak.
const SOURCE_PX = 1254;
const MARK_LEFT = 109;
const MARK_TOP = 106;
const MARK_WIDTH = 1107;
const MARK_HEIGHT = 1034;

const DEFAULT_HEIGHT = 52;

interface BrandLogoProps {
  /** Belgining ko'rinadigan balandligi. Eni nisbatga qarab o'zi hisoblanadi. */
  height?: number;
  /** Yonida brend nomi matni bo'lsa, bo'sh qator bering — belgi bezak bo'lib qoladi. */
  alt: string;
}

export default function BrandLogo({
  height = DEFAULT_HEIGHT,
  alt,
}: BrandLogoProps) {
  const scale = height / MARK_HEIGHT;
  const rendered = SOURCE_PX * scale;

  return (
    <span
      className="relative block shrink-0 overflow-hidden"
      style={{ width: MARK_WIDTH * scale, height }}
    >
      <img
        src={new URL("../logo.png", import.meta.url).href}
        alt={alt}
        width={SOURCE_PX}
        height={SOURCE_PX}
        className="absolute max-w-none"
        style={{
          width: rendered,
          height: rendered,
          left: -MARK_LEFT * scale,
          top: -MARK_TOP * scale,
        }}
      />
    </span>
  );
}
