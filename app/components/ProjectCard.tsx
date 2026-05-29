import type { Project } from "@/app/content";

/**
 * A single Lab project: kicker tag, name, one-line lead, body prose, and an
 * outbound link. Stacked entries get a divider; the first one doesn't.
 */
export default function ProjectCard({
  tag,
  name,
  lead,
  body,
  href,
  linkLabel,
}: Project) {
  return (
    <article className="max-w-[660px] border-t border-border pt-10 first:border-t-0 first:pt-0 print:break-inside-avoid">
      <p className="text-xs tracking-[0.2em] uppercase text-faint">{tag}</p>
      <h3 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.02em] mt-[14px] mb-[6px]">
        {name}
      </h3>
      <p className="text-sm text-accent mb-[18px]">{lead}</p>
      <p className="text-[15px] leading-[1.75] text-muted">{body}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 text-sm text-foreground mt-6 border-b border-accent pb-[2px] transition-[gap] duration-200 hover:gap-[14px] hover:text-accent print:hidden"
      >
        {linkLabel}
      </a>
    </article>
  );
}
