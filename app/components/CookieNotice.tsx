"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Satirical anti-cookie banner. Slides in after a beat. Dismissal lasts only
 * for the current page session — it returns on the next refresh (no storage).
 */
export default function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const removeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    setVisible(true);
    const t = window.setTimeout(() => setShow(true), 1100);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(removeTimer.current);
    };
  }, []);

  function accept() {
    setShow(false);
    removeTimer.current = window.setTimeout(() => setVisible(false), 500);
  }

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Lack of cookies notice"
      className={cn(
        "fixed z-[80] bottom-[18px] left-[18px] max-w-[430px] flex flex-col gap-[14px]",
        "py-[18px] px-5 bg-surface border border-border rounded",
        "shadow-[0_18px_50px_-22px_rgba(0,0,0,0.75)]",
        "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
        "max-[640px]:left-3 max-[640px]:right-3 max-[640px]:max-w-none max-[640px]:bottom-[84px]",
        "print:hidden",
        show ? "translate-y-0 opacity-100" : "translate-y-[140%] opacity-0"
      )}
    >
      <div>
        <div className="text-[11px] tracking-[0.14em] uppercase text-accent mb-[6px]">
          Lack of cookies notice
        </div>
        <p className="text-[12.5px] leading-[1.65] text-muted">
          This website does not use cookies to ensure you get the best
          experience on our website. By continuing to use this site, you accept
          having not the greatest experience.
        </p>
      </div>
      <Button
        type="button"
        variant="solid"
        size="sm"
        className="self-start hover:brightness-[1.1]"
        onClick={accept}
      >
        Accept
      </Button>
    </aside>
  );
}
