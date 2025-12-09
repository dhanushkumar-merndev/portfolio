"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";

interface CSSVarStyle extends CSSProperties {
  "--i": number;
}

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 6000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white font-sans overflow-hidden">
      {/* WINDOWS LOGO */}
      <div className="mb-24 scale-110" style={{ perspective: "400px" }}>
        <div
          className="grid grid-cols-2 gap-1 w-28 h-24 bg-black/60"
          style={{
            transform: "rotateY(-35deg)",
          }}
        >
          <div className="bg-[#02cbff]"></div>
          <div className="bg-[#02cbff]"></div>
          <div className="bg-[#02cbff]"></div>
          <div className="bg-[#02cbff]"></div>
        </div>
      </div>

      {/* WINDOWS LOADER */}
      <div className="relative w-12 h-12">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="dot" style={{ "--i": i } as CSSVarStyle} />
        ))}
      </div>

      <style jsx>{`
        .dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          top: 0;
          left: 50%;
          margin-left: -2px;
          transform-origin: 50% 16px;
          opacity: 0;
          animation: spin 2s cubic-bezier(0.55, 0.08, 0.27, 0.99) infinite;
          animation-delay: calc(var(--i) * 0.1s);
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
