import { SITE } from "@/app/content";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="reveal py-20 print:py-[30px]" id="contact">
      <h2 className="text-[clamp(30px,6vw,64px)] font-semibold tracking-[-0.03em] leading-[1.05] max-w-[760px] print:text-[22pt]">
        Let&apos;s talk about something{" "}
        <span className="text-accent">worth building</span>.
      </h2>
      <p className="mt-[26px] max-w-[600px] text-[15px] leading-[1.7] text-muted">
        I&apos;m not actively looking, but I&apos;m open to the right{" "}
        <b className="text-foreground font-semibold">
          backend or fullstack role
        </b>
        , remote or on-site around Łódź. I&apos;m comfortable working in{" "}
        <b className="text-foreground font-semibold">Polish</b> (native) or{" "}
        <b className="text-foreground font-semibold">English</b> (C1), and email
        is the quickest way to reach me.
      </p>
      <div className="flex flex-wrap gap-4 mt-11 print:hidden">
        <Button asChild variant="solid">
          <a href="/assets/Michal-Kubik-CV.pdf" download>
            Download résumé (PDF)
          </a>
        </Button>
        <Button asChild>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </Button>
        <Button asChild>
          <a href={SITE.github} target="_blank" rel="noopener">
            GitHub
          </a>
        </Button>
        <Button asChild>
          <a href={SITE.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
        </Button>
      </div>
      <div className="hidden print:block mt-8 text-sm text-muted leading-[1.9]">
        <div>Email - {SITE.email}</div>
        <div>GitHub - github.com/bopke</div>
        <div>LinkedIn - linkedin.com/in/michał-kubik-420170161</div>
      </div>
    </section>
  );
}
