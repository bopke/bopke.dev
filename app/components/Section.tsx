import type { ReactNode } from "react";

/** Horizontal page gutter shared by the top bar and <main>. */
export const WRAP = "max-w-[1080px] mx-auto px-10 max-[760px]:px-6";

const SECTION =
  "print-section reveal grid grid-cols-[200px_1fr] gap-10 py-[70px] border-b border-border max-[760px]:grid-cols-1 max-[760px]:gap-6 print:py-[26px]";
const HEAD =
  "section-head sticky top-[30px] self-start max-[760px]:static print:static";

/** A numbered editorial section: sticky head column + body. */
export function Section({
  id,
  num,
  title,
  sub,
  children,
}: {
  id: string;
  num: string;
  title: string;
  sub: string;
  children: ReactNode;
}) {
  return (
    <section className={SECTION} id={id}>
      <div className={HEAD}>
        <div className="text-xs text-accent tracking-[0.1em]">{num}</div>
        <h2 className="text-2xl font-semibold mt-2 tracking-[-0.01em]">{title}</h2>
        <p className="text-xs text-faint mt-[10px] leading-[1.6]">{sub}</p>
      </div>
      {children}
    </section>
  );
}
