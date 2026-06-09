// Logo.tsx
import Image from "next/image";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});


export default function Logo() {
  return (
    <div className="flex items-center gap-3 ">
      <Image
        src="/images/logo.png"
        alt="De La Salle Kigali"
        width={100}
        height={100}
        priority
        className="h-12 w-12 md:h-16 md:w-26 lg:h-30 lg:w-20"
      />

      <div className="shrink-0 mr-2 lg:w-72">
        <h1 className={`${playfair.className} text-3xl font-bold text-blue-900`}>
          De La Salle
        </h1>
        <p className="text-sm tracking-wider text-blue-900 ">
          KIGALI
        </p>
      </div>
    </div>
  );
}