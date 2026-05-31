import { SITE } from "@/app/content";

const infoLink =
  "text-muted border-b border-border pb-px transition-colors duration-200 hover:text-accent hover:border-accent";

export default function Hero() {
  return (
    <section className="pt-[70px] pb-20 border-b border-border print:pt-4 print:pb-[26px]">
      <p className="text-xs tracking-[0.28em] uppercase text-accent mb-[30px]">
        Fullstack Engineer · Łódź, Poland
      </p>
      <h1 className="text-[clamp(46px,10vw,122px)] font-semibold leading-[1.05] tracking-[-0.04em] print:text-[40pt]">
        Systems
        <br />
        that <em className="italic font-normal text-muted">hold up.</em>
      </h1>
      <p className="mt-9 max-w-[620px] text-[clamp(15px,1.8vw,18px)] leading-[1.7] text-muted print:text-[12pt]">
        I&apos;m <b className="text-foreground font-semibold">Michał Kubik</b>, a
        fullstack engineer who spends most of his time on the backend. I build
        the APIs, data models and integrations behind{" "}
        <b className="text-foreground font-semibold">
          HIPAA healthcare and fintech
        </b>{" "}
        products, the kind that have to stay fast, cheap and reliable as they
        grow. Lately that&apos;s meant cutting one product&apos;s database bill by{" "}
        <b className="text-foreground font-semibold">over 60%</b> and helping
        rebuild another to handle{" "}
        <b className="text-foreground font-semibold">tens of thousands of users</b>.
      </p>
      <div className="mt-10 flex flex-wrap gap-y-2 gap-x-7 text-[12.5px] text-faint">
        <a href={SITE.github} target="_blank" rel="noopener" className={infoLink}>
          github.com/bopke
        </a>
        <a href={`mailto:${SITE.email}`} className={infoLink}>
          {SITE.email}
        </a>
      </div>
      <div className="inline-flex items-center gap-[9px] mt-[26px] text-[12.5px] tracking-[0.02em] text-muted border border-border rounded-full py-[7px] px-[15px]">
        <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)] animate-avail-pulse print:hidden" />
        Open to the right backend/fullstack role
      </div>
    </section>
  );
}
