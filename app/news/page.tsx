"use client";
import { useEffect, useState } from "react";
import { NewsPage } from "@/components/news";
import useScrollPercentage from "@/hooks/useScrollPercentage";
import { createPortal } from "react-dom";
import car from "@/public/car.png";
import Image from "next/image";

export default function News() {
  const { scrollPercentage, viewportWidth } = useScrollPercentage();
  console.log("scrollPercentage", scrollPercentage, viewportWidth);

  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Ensure the target element exists and is set when the component mounts
    const target = document.getElementById("portal");
    setPortalTarget(target);
  }, []);

  // Calculate car position based on scroll percentage
  const carPosition = (scrollPercentage / 290) * viewportWidth;

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between">
      <NewsPage />
      {portalTarget
        && createPortal(
            <div className=" fixed bg-car bg-cover bottom-0 h-24 w-full">
              <Image
                className="fixed bottom-0 "
                style={{
                  left: `${carPosition}px`,
                  transition: "left 0.1s ease-out",
                }}
                src={car}
                height={50}
                width={200}
                alt="car"
              />
            </div>,
            portalTarget
          )
        }
    </main>
  );
}
